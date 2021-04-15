import React from 'react';
import styled from 'styled-components';

//import ShowAllPhotosIcon icon
import ShowAllPhotosIcon from './ShowAllPhotosIcon.jsx';

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
  padding: 4px;
  border-radius: 12px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: auto;
  margin-bottom: 25px;
  padding-left: 10px;
  padding-right: 40px;
  margin-left: 10%;
  // margin-right: 10%;

  // height: “100%“;
  // padding-top: “48px”;
  // padding-left: “40px”;
  // padding-right: “40px”;
  max-width: 1280px;
  min-width: 744px;
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
        <PrimaryPhoto src={props.photos[0].url} alt={'large photo'} onClick= {() =>{props.changeView();
          props.changeModalPicFromHomepage(0);
          }
          }></PrimaryPhoto>
      </div>
      <div>
        <div>
          <span>
            <SmallerPhoto src={props.photos[1].url} alt={'small photo1'} onClick={
              () => {props.changeView();
                props.changeModalPicFromHomepage(1);
              }
              }></SmallerPhoto>
            <SmallerPhoto src={props.photos[2].url} alt={'small photo2'} onClick={
              () => {props.changeView();
                props.changeModalPicFromHomepage(2);
              }
              }></SmallerPhoto>
          </span>
        </div>
        <div style={{position: "absolute"}}>
          <span>
            <SmallerPhoto src={props.photos[3].url} alt={'small photo3'} onClick={
              () => {props.changeView();
                props.changeModalPicFromHomepage(3);
              }
              }></SmallerPhoto>
            <SmallerPhoto src={props.photos[4].url} alt={'small photo4'} onClick={
              () => {props.changeView();
                props.changeModalPicFromHomepage(4);
              }
              }>
              </SmallerPhoto>
          </span>
          <ShowAllPhotosIcon/>
        </div>
      </div>
    </Wrapper>
  );
};

export default Homepage;

