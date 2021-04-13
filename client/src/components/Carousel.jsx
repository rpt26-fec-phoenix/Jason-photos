import React from 'react';
import styled from 'styled-components';

//import share icon

//import save icon
import SaveIcon from './Saveicon.jsx';

//create wrapper div
const Wrapper = styled.div`
  background-color: black;
  background-size: 100%;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif !important;
  height: 100%;
  width: 100%;
  // padding-top: “48px”;
  // padding-left: “40px”;
  // padding-right: “40px”;
  // max-width: “1280px”;
  // min-width: “744px”;
  // margin-left: “20%“;
  // margin-right: “10%”;
`;


//create styled component for photo
const StyledPhoto = styled.img`
  width: 50%;
  padding: 4px;
`;


const Carousel = (props) => {
  return (
    <Wrapper>
      <div>
        <button onClick={props.changeView}> X Close </button>
        {/* <SaveIcon /> */}
        {/*TODO SHARE ICON */}
      </div>
      <div>
        {/*conditional rendering for left button */}
        {/*Photo:*/}
        <StyledPhoto src={props.photos[props.currentPic].url} alt={`styledPhoto${props.currentPic}`} />
        {/*conditional rendering for right button */}
      </div>

    </Wrapper>
  );
};

export default Carousel;






// {/* iterate over the props passed in and create a photo for each index */}
// {props.photos.map((currPhoto) => {
//   //create a styled photo for each one
//   return (
//     <span>
//       <StyledPhoto src={currPhoto.url} alt={`styledPhoto${currPhoto}`} />
//     </span>
//   )
// })}