import React from 'react';
import styled from 'styled-components';

const PrimaryPhoto = styled.img`
  width: 564px;
  height: 391px;
  // border: 2px solid #333;
  border-radius: 8px;
  margin: 6px;
  margin-left: 0px;
`;

const SmallerPhoto = styled.img`
  display: border-box;
  width: 264px;
  height: 190px;
  padding: 6px;
  border-radius: 12px;
  padding-bottom: 4px;
  padding-top: 4px;
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 80% 20% 20%;
  margin: auto;
  width: 50%;
  // border: 2px solid #333;
  // border-radius: 4px;
  margin-bottom: 25px;
  padding-right: 10px;
  /*overflow: hidden; */

  ${PrimaryPhoto}:hover {
    opacity: 50%;
  }

  ${SmallerPhoto}: hover {
    opacity: 50%;
  }
`;




const Homepage = (props) => {

  return (
    <Wrapper>
      <PrimaryPhoto src={props.photos[0].url} alt={'large photo'}></PrimaryPhoto>
      <div>
        <span>
          <div>
            <SmallerPhoto src={props.photos[1].url} alt={'small photo1'}></SmallerPhoto>
          </div>
          <div>
            <SmallerPhoto src={props.photos[3].url} alt={'small photo3'}></SmallerPhoto>
          </div>
        </span>
        <span>
          <div>
            <SmallerPhoto src={props.photos[2].url} alt={'small photo2'}></SmallerPhoto>
          </div>
          <div>
            <SmallerPhoto src={props.photos[4].url} alt={'small photo4'}></SmallerPhoto>
          </div>
        </span>
      </div>
    </Wrapper>
  );
};

export default Homepage;

