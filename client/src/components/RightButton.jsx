import React from 'react';

const RightButton = ({onClick}) => (

  <button aria-label="Next" type="button" onClick={onClick}>
    <span>
      <svg
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        role="presentation"
        focusable="false"
        style={{
          display: "block", fill: "none", height: "12px", width: "12px", stroke: "currentcolor", strokeWidth: "5.33333", overflow: "visible"
        }}>
        <g fill="none">
          <path d="m12 4 11.2928932 11.2928932c.3905243.3905243.3905243 1.0236893 0 1.4142136l-11.2928932 11.2928932">
          </path>
        </g>
      </svg>
    </span>
  </button>
);


export default RightButton;




// //create styled component for right button
// const RightButton = styled.button`
//   position: absolute;
//   left: 95%;
//   top: 50%;
//   font-size: 1em;
//   cursor: pointer;
//   border: none;
//   border-radius: 5px;
// `;

