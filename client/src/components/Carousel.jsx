import React from 'react';
import styled from 'styled-components';

//import Exit icon
import ExitIcon from './ExitIcon.jsx';

//import share icon
import ShareIcon from './ShareIcon.jsx';

//import save icon
import SaveIcon from './Saveicon.jsx';

//import LeftButton icon
import LeftButton from './LeftButton.jsx';

//import RightButton icon
import RightButton from './RightButton.jsx';

//create wrapper div
const Wrapper = styled.div`
  position: fixed;
  z-index: -1;
  background-color: black;
  height: 100%;
  width: 100%;
`;

//create styled component for photo
const StyledPhoto = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 50%;
  transform: translate(-50%, -50%);
  max-width: 500px;
  max-height: 800px;
  border: 2px solid black;
  overflow: hidden;
`;

//create styled component for picture text
const PicText = styled.p`
  color: white;
  text-align: center;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif !important;
  font-weight: 400;
  font-size: 16px;
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
          <PicText> {props.currentPic + 1} / {props.photos.length} </PicText>
          <ShareIcon />
          <SaveIcon />
        </span>
      </div>
        {/*conditional rendering for left button */}
        {leftButtonTrue ? <LeftButton onClick={props.changeModalPicLeft} /> : null}
        {/*Photo:*/}
        <StyledPhoto src={props.photos[props.currentPic].url} alt={`styledPhoto${props.currentPic}`} />
        {/*conditional rendering for right button */}
        {rightButtonTrue ? <RightButton onClick={props.changeModalPicRight} /> : null}
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