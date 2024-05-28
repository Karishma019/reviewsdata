import React from "react";

function Tooltip({ topic, position }) {
  const tooltipStyle = {
    position: "absolute",
    top: position.y,
    left: position.x,
    backgroundColor: "#eee",
    border: "1px solid #ccc",
    padding: "5px",
    borderRadius: "1rem",
    zIndex: 1000,
  };

  return <div style={tooltipStyle}>{topic}</div>;
}

export default Tooltip;
