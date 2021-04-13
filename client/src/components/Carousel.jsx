import React from 'react';
import styled from 'styled-components';

//import share icon

//import save icon
import SaveIcon from './Saveicon.jsx';


//create styled component for photo
const StyledPhoto = styled.img`
  width: 25%;
  padding: 4px;
`;

const Carousel = (props) => {
  {/* iterate over the props passed in and create a photo for each index */}
  {for (var i = 0; i < props.photos.length; i++) {
    //create a styled photo for each one
    <StyledPhoto url={props.photos[i].url} />
  }}
  return (
    <div>
      <button onClick={props.changeView}> Back </button>
      In the Carousel!
      {/* <SaveIcon /> */}
      <div>
        {props.photos.map((currPhoto) => {
          return <StyledPhoto src={currPhoto.url} alt={`styledPhoto${currPhoto}`} />
        })}
      </div>
    </div>
  );
};

export default Carousel;