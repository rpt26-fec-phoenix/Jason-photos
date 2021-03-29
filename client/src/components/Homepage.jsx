import React from 'react';
import styled from 'styled-components';

const PrimaryPhoto = styled.img`
  width: 564px;
  border: 2px solid #333;
`;

const SmallerPhoto = styled.img`
  width: 264px;
  height: 150px;
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
      <span>
        <PrimaryPhoto src={props.photos[0].url} alt={'large photo'}></PrimaryPhoto>
      </span>
      <span>
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
      </span>
    </Wrapper>
  );
};

export default Homepage;

