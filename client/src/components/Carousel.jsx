import React from 'react';
import styled from 'styled-components';

//import Exit icon
import ExitIcon from './ExitIcon.jsx';

//import share icon
import ShareIcon from './ShareIcon.jsx';

//import save icon
import SaveIcon from './Saveicon.jsx';

//create wrapper div
const Wrapper = styled.div`
  // background-color: black;
  background-size: 100%;
  height: 500%;
  width: 100%;
  // font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif !important;
`;

//create top level

//create styled component for photo
const StyledPhoto = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  // flex-direction: row;
  width: 50%;
  padding: 4px;
  overflow: hidden;
`;

//create styled component for left button
const LeftButton = styled.button`
  position: fixed;
`;

//create styled component for right button
const RightButton = styled.button`

`;

//create styled component for picture text
const PicText = styled.p`
  color: black;
  text-align: center;
`;

const Carousel = (props) => {
  //create leftButtonTrue var
  var leftButtonTrue;
  //if the currentPic prop is not 0, then have a left button
  if (props.currentPic !== 0) {
    leftButtonTrue = true;
  } else {
    leftButtonTrue = false;
  }

  //create rightButtonTrue var
  var rightButtonTrue;
  //if the currentPic prop is not the last photo, then have a right button
  if (props.currentPic !== props.photos.length - 1) {
    rightButtonTrue = true;
  } else {
    rightButtonTrue = false;
  }
  return (
    <Wrapper>
      <div>
        <span>
            <button onClick={props.changeView}> <ExitIcon /> Close </button>
          <ShareIcon />
          <SaveIcon />
        </span>
      </div>
      <div>
        {/*conditional rendering for left button */}
        {leftButtonTrue ? <button onClick={props.changeModalPicLeft}>Left</button> : null}
        {/*Photo:*/}
        <StyledPhoto src={props.photos[props.currentPic].url} alt={`styledPhoto${props.currentPic}`} />
        {/*conditional rendering for right button */}
        {rightButtonTrue ? <button onClick={props.changeModalPicRight}>Right</button> : null}
      </div>
      <div>
        {/*div for the text for each photo*/}
        <PicText>{props.photos[props.currentPic].text}</PicText>
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