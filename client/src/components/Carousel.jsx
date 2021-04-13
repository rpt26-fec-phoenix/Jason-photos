import React from 'react';
import styled from 'styled-components';

//import share icon

//import save icon
import SaveIcon from './Saveicon.jsx';

//create wrapper div
const Wrapper = styled.div`
height: “100%“;
  padding-top: “48px”;
  padding-left: “40px”;
  padding-right: “40px”;
  max-width: “1280px”;
  min-width: “744px”;
  margin-left: “20%“;
  margin-right: “10%”;
`;


//create styled component for photo
const StyledPhoto = styled.img`
  width: 25%;
  padding: 4px;
`;


const Carousel = (props) => {
  return (
    <Wrapper>
      <div>
      <button onClick={props.changeView}> Back </button>
      In the Carousel!
      {/* <SaveIcon /> */}
      </div>
        {/* iterate over the props passed in and create a photo for each index */}
        {props.photos.map((currPhoto) => {
          //create a styled photo for each one
          return (
            <span>
              <StyledPhoto src={currPhoto.url} alt={`styledPhoto${currPhoto}`} />
            </span>
          )
        })}
    </Wrapper>
  );
};

export default Carousel;