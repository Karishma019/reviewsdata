// src/ReviewHighlighter.jsx
import React, { useState, Fragment } from "react";
import Tooltip from "./Tooltip";
import HighlightedText from "./HighlightedText";

const sentimentColors = {
  Positive: "#D9F2DD",
  Negative: "#F2DBD9",
  Mixed: "#e8bd6d3d",
  Neutral: "#eaf09b6b",
};

const ReviewHighlighter = ({ review }) => {
  const [tooltip, setTooltip] = useState({
    visible: false,
    topic: "",
    x: 0,
    y: 0,
  });

  const showTooltip = (topic, e) => {
    setTooltip({ visible: true, topic, x: e.clientX / 2, y: e.clientY / 45 });
  };

  const hideTooltip = () => {
    setTooltip({ visible: false, topic: "", x: 0, y: 0 });
  };

  const parseContent = (content, analytics) => {
    let parts = [];
    let lastIndex = 0;

    analytics.forEach((analytic) => {
      analytic.highlight_indices.forEach(([start, end, sentiment]) => {
        if (lastIndex < start) {
          parts.push({
            text: content.slice(lastIndex, start),
            isHighlighted: false,
          });
        }
        parts.push({
          text: content.slice(start, end),
          isHighlighted: true,
          color: sentimentColors[sentiment],
          topic: analytic.topic,
        });
        lastIndex = end;
      });
    });

    if (lastIndex < content.length) {
      parts.push({ text: content.slice(lastIndex), isHighlighted: false });
    }

    return parts;
  };

  const highlightedContent = parseContent(review.content, review.analytics);

  return (
    <div style={{ position: "relative" }}>
      {highlightedContent.map((part, index) =>
        part.isHighlighted ? (
          <HighlightedText
            key={index}
            text={part.text}
            color={part.color}
            onMouseOver={(e) => showTooltip(part.topic, e)}
            onMouseOut={hideTooltip}
          />
        ) : (
          <Fragment key={index}>{part.text}</Fragment>
        )
      )}
      {tooltip.visible && (
        <Tooltip
          topic={tooltip.topic}
          position={{ x: tooltip.x, y: tooltip.y }}
        />
      )}
    </div>
  );
};

export default ReviewHighlighter;
