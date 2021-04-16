import React from 'react';

const ShareIcon = () => (
  <div style={{
    fontFamily: "Circular, -apple-system, BlinkMacSystemFont, Roboto, 'Helvetica Neue', sans-serif",
    fontSize: "14px",
    lineHeight: "18px",
    fontWeight: "600",
    outline: "none",
    padding: "7px 15px",
    color: "white",
    position: "absolute",
    top: "20px",
    right: "14%"
  }}>
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="presentation"
      focusable="false"
      style={{
        display: "block", fill: "none", height: "16px", width: "16px", stroke: "currentcolor", overflow: "visible", color: "white", position: "fixed", top: "30px", right: "18%"
      }}>
      <g fill="none">
        <path d="M27 18v9a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-9">
        </path>
        <path d="M16 3v23V3z">
        </path>
        <path d="M6 13l9.293-9.293a1 1 0 0 1 1.414 0L26 13">
        </path>
      </g>
    </svg >
    Share
  </div>

);

export default ShareIcon;


