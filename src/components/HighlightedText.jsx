// src/HighlightedText.jsx
import React from "react";

const HighlightedText = ({ text, color, onMouseOver, onMouseOut }) => {
  const spanStyle = {
    backgroundColor: color,
    cursor: "pointer",
  };

  return (
    <span style={spanStyle} onMouseOver={onMouseOver} onMouseOut={onMouseOut}>
      {text}
    </span>
  );
};

export default HighlightedText;
