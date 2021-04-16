import React from 'react';

const SaveIcon = () => (

  <div style={{
    display: "inline",
    fontFamily: "Circular, -apple-system, BlinkMacSystemFont, Roboto, 'Helvetica Neue', sans-serif",
    fontSize: "14px",
    lineHeight: "18px",
    fontWeight: "600",
    outline: "none",
    padding: "7px 15px",
    color: "white",
    position: "absolute",
    top: "20px",
    right: "8%"
  }}>
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="presentation"
      focusable="false"
      style={{
        display: "block", fill: "none", height: "16px", width: "16px", stroke: "currentcolor", overflow: "visible", color: "white", position: "fixed", top: "30px", right: "12%"
      }}>
      <g fill="none">
        <path d="m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z">
        </path>
      </g>
    </svg>
      Save
  </div>
);

export default SaveIcon;

