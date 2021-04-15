import React from 'react';

const ShowAllPhotosIcon = () => (

  <button style={{
    position: "absolute",
    right: "24px",
    bottom: "24px",
    borderRadius: "5px",
    border: "none",
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: "rgb(34, 34, 34)",
    fontFamily: "Circular, -apple-system, BlinkMacSystemFont, Roboto, 'Helvetica Neue', sans-serif",
    fontSize: "14px",
    lineHeight: "18px",
    fontWeight: "600",
    outline: "none",
    padding: "7px 15px",
    // transition: box-shadow 0.2s ease 0s, -ms-transform 0.1s ease 0s, -webkit-transform 0.1s ease 0s, transform 0.1s ease 0s !important;
    background: "rgb(255, 255, 255)",
    color: "rgb(34, 34, 34)"
  }}>
  <div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 17 17"
      role="presentation"
      aria-hidden="true"
      focusable="false"
      style={{ height: "12px", width: "12px", display: "inline-block", fill: "currentcolor", cursor: "pointer", border: "none", paddingRight: "5px" }}>
      <circle cx="1.5" cy="1.5" r="1.5">
      </circle>
      <circle cx="1.5" cy="8.5" r="1.5">
      </circle>
      <circle cx="8.5" cy="1.5" r="1.5">
      </circle>
      <circle cx="8.5" cy="8.5" r="1.5">
      </circle>
      <circle cx="15.5" cy="1.5" r="1.5">
      </circle>
      <circle cx="15.5" cy="8.5" r="1.5">
      </circle>
      <circle cx="1.5" cy="15.5" r="1.5">
      </circle>
      <circle cx="8.5" cy="15.5" r="1.5">
      </circle>
      <circle cx="15.5" cy="15.5" r="1.5">
      </circle>
    </svg>
    <div style={{
      display: "inline-block",
      marginLeft: "2px",
      fontSize: "12px"
    }}>
      Show all photos
      </div>
  </div>
  </button >

);

export default ShowAllPhotosIcon;

