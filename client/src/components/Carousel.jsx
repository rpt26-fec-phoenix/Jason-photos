import React from 'react';
import styled from 'styled-components';

const Carousel = (props) => {
  return (
    <div>
      <button onClick={props.changeView}> Back </button>
      In the Carousel!
    </div>
  );
};

export default Carousel;