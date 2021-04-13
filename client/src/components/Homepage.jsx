import React from 'react';
import styled from 'styled-components';

const PrimaryPhoto = styled.img`
  margin-left: auto;
  margin-right: auto;
  width: 564px;
  height: 391px;
  // border: 2px solid #333;
  border-radius: 8px;
  margin: 6px;
  margin-left: 3px;
  margin-right: 3px;
`;

const SmallerPhoto = styled.img`
  // display: border-box;
  width: 264px;
  height: 190px;
  padding: 6px;
  border-radius: 12px;
  padding-bottom: 4px;
  padding-top: 4px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  // grid-template-columns: 80% 30%;
  margin: auto;
  // border: 2px solid #333;
  // border-radius: 4px;
  margin-bottom: 25px;
  padding-right: 10px;
  /*overflow: hidden; */

  // height: “100%“;
  // padding-top: “48px”;
  // padding-left: “40px”;
  // padding-right: “40px”;
  // max-width: “1280px”;
  // min-width: “744px”;
  // margin-left: “20%“;
  // margin-right: “10%”;

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
      <div>
        <PrimaryPhoto src={props.photos[0].url} alt={'large photo'} onClick={props.changeView}></PrimaryPhoto>
      </div>
      <div>
        <div>
          <span>
            <SmallerPhoto src={props.photos[1].url} alt={'small photo1'} onClick={props.changeView}></SmallerPhoto>
            <SmallerPhoto src={props.photos[2].url} alt={'small photo2'} onClick={props.changeView}></SmallerPhoto>
          </span>
        </div>
        <div>
          <span>
            <SmallerPhoto src={props.photos[3].url} alt={'small photo3'} onClick={props.changeView}></SmallerPhoto>
            <SmallerPhoto src={props.photos[4].url} alt={'small photo4'} onClick={props.changeView}></SmallerPhoto>
          </span>
        </div>
      </div>
    </Wrapper>
  );
};

export default Homepage;

