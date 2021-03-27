import React from 'react';
import styled from 'styled-components';

const PrimaryPhoto = styled.img`
  width: 75%;
  border: 2px solid #333;
`;

const Wrapper = styled.div`
  width: 50%;
  border: 2px solid #333;
  border-radius: 4px;
  margin-bottom: 25px;
  padding-right: 10px;
  /*overflow: hidden; */
`;


const Homepage = (props) => {

  return (
    <Wrapper>
      Hey there dudes
      <span>
        <PrimaryPhoto src={props.photos[0].url} alt={'large photo'}></PrimaryPhoto>
        {/* <img src={props.photos[0].url} alt={'large photo'}></img> */}
      </span>
      <span>
        <div>
          <div>
            <span>
              <img src={props.photos[1].url} alt={'small photo1'}></img>
              <img src={props.photos[3].url} alt={'small photo3'}></img>
            </span>
          </div>
          <div>
            <span>
              <img src={props.photos[2].url} alt={'small photo2'}></img>
              <img src={props.photos[4].url} alt={'small photo4'}></img>
            </span>
          </div>
        </div>
      </span>
    </Wrapper>
  );
};

export default Homepage;

