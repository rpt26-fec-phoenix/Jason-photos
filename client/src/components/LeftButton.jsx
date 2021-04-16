import React from 'react';

const LeftButton = ({onClick}) => (

  <button aria-label="Previous" type="button" onClick={onClick} style={{
    position: "absolute",
    top: "50%",
    left: "15px",
    borderRadius: "100%",
    backgroundColor: "rgb(169,169,169)"
  }}>
    <span >
      <svg
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        role="presentation"
        focusable="false"
        style={{
          display: "block", fill: "none", height: "12px", width: "12px", stroke: "currentcolor", strokeWidth: "5.33333", overflow: "visible", cursor: "pointer", padding: "20px"
        }}>
        <g fill="none">
          <path d="m20 28-11.29289322-11.2928932c-.39052429-.3905243-.39052429-1.0236893 0-1.4142136l11.29289322-11.2928932">
          </path>
        </g>
      </svg>
    </span>
  </button>
);


export default LeftButton;

