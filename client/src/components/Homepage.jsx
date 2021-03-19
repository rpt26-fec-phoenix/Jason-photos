import React from 'react';

import LargePhoto from './LargePhoto.jsx';
import SmallPhotos from './SmallPhotos.jsx';


const Homepage = (props) => {
  //create an array of 4 photos to create smaller photos
  const photoArray = [];
  for (let i = 1; i < 5; i++) {
    photoArray.push(props.photos[i]);
  }

  return (
    <div>
      Hey there dudes
      <span>
        <LargePhoto photo={props.photos[0]} />
      </span>
      <span>
        <SmallPhotos photos={photoArray} />
      </span>

    </div>
  );
};

export default Homepage;
