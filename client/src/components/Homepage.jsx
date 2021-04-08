import React from 'react';
import styled from 'styled-components';

const PrimaryPhoto = styled.img`
  width: 564px;
  border: 2px solid #333;
  border-radius: 8px;
  margin: 6px;
`;

const SmallerPhoto = styled.img`
  display: border-box;
  width: 264px;
  height: 150px;
  padding: 6px;
`;

const Wrapper = styled.div`
  width: 50%;
  border: 2px solid #333;
  border-radius: 4px;
  margin-bottom: 25px;
  padding-right: 10px;
  /*overflow: hidden; */

  ${PrimaryPhoto}:hover {
    opacity: 50%;
  }
`;


const Homepage = (props) => {

  return (
    <Wrapper>
        <PrimaryPhoto src={props.photos[0].url} alt={'large photo'}></PrimaryPhoto>
        <div>
          <div>
            <span>
              <SmallerPhoto src={props.photos[1].url} alt={'small photo1'}></SmallerPhoto>
              <SmallerPhoto src={props.photos[3].url} alt={'small photo3'}></SmallerPhoto>
            </span>
          </div>
          <div>
            <span>
              <SmallerPhoto src={props.photos[2].url} alt={'small photo2'}></SmallerPhoto>
              <SmallerPhoto src={props.photos[4].url} alt={'small photo4'}></SmallerPhoto>
            </span>
          </div>
        </div>
    </Wrapper>
  );
};

export default Homepage;

