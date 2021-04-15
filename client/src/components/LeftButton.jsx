import React from 'react';

const LeftButton = () => (

  <button aria-label="Previous" type="button">
    <span >
      <svg
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        role="presentation"
        focusable="false"
        style={{
          display: "block", fill: "none", height: "12px", width: "12px", stroke: "currentcolor", strokeWidth: "5.33333", overflow: "visible", cursor: "pointer"
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


// fontSize: "1em",
// border: "none",
//borderRadius: "50%"

//, position: "absolute", left: "5%", top: "50%"
