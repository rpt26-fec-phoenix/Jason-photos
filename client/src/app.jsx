import React from 'react';
import ReactDOM from 'react-dom';
import Homepage from './components/Homepage.jsx';
import Carousel from './components/Carousel.jsx';

import axios from 'axios';


class App extends React.Component {
  constructor(props) {
    super(props);
    //set a starting state so things will render
    this.state = {
      view: 'Homepage',
      photos: [
        {
          photoOrderId: 0,
          primaryPhoto: true,
          propertyID: 1,
          text: "Eos eius harum occaecati fuga fuga.",
          url: "https://testairbnbphotos.s3.us-west-1.amazonaws.com/photo40.jpg",
          __v: 0,
          _id: "604b1ee8c13b395add2333e3"
        },
        {
          photoOrderId: 0,
          primaryPhoto: true,
          propertyID: 1,
          text: "Eos eius harum occaecati fuga fuga.",
          url: "https://testairbnbphotos.s3.us-west-1.amazonaws.com/photo40.jpg",
          __v: 0,
          _id: "604b1ee8c13b395add2333e3"
        },
        {
          photoOrderId: 0,
          primaryPhoto: true,
          propertyID: 1,
          text: "Eos eius harum occaecati fuga fuga.",
          url: "https://testairbnbphotos.s3.us-west-1.amazonaws.com/photo40.jpg",
          __v: 0,
          _id: "604b1ee8c13b395add2333e3"
        },
        {
          photoOrderId: 0,
          primaryPhoto: true,
          propertyID: 1,
          text: "Eos eius harum occaecati fuga fuga.",
          url: "https://testairbnbphotos.s3.us-west-1.amazonaws.com/photo40.jpg",
          __v: 0,
          _id: "604b1ee8c13b395add2333e3"
        },
        {
          photoOrderId: 0,
          primaryPhoto: true,
          propertyID: 1,
          text: "Eos eius harum occaecati fuga fuga.",
          url: "https://testairbnbphotos.s3.us-west-1.amazonaws.com/photo40.jpg",
          __v: 0,
          _id: "604b1ee8c13b395add2333e3"
        },
        {
          photoOrderId: 0,
          primaryPhoto: true,
          propertyID: 1,
          text: "Eos eius harum occaecati fuga fuga.",
          url: "https://testairbnbphotos.s3.us-west-1.amazonaws.com/photo40.jpg",
          __v: 0,
          _id: "604b1ee8c13b395add2333e3"
        }
      ],
      modalCurrentPhoto: 0
    };
    //bind the changeView function to this context
    this.changeView = this.changeView.bind(this);

    //bind the changeModalPic function to this context
    this.changeModalPic = this.changeModalPic.bind(this);
  }

  //as soon as the component mounts, call the getPhotos function
  componentDidMount() {
    console.log('Mounted');
    this.getPhotos();
  };


  //function that will send a GET request for the propID data and populate the state
  getPhotos() {
    //get the url of the webpage
    const url = window.location.href;
    console.log('URL', url);
    //get the propertyID from this url
    let propID = url.split('/')[3];
    // const propID = url[]
    //send GET to /photos/${propID}
    axios.get(`/photos/${propID}`)
      .then((result) => {
        console.log('FETCH RESULT', result.data);
        this.setState({
          photos: result.data
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };



  //function to change the view
  changeView() {
    console.log('changing the view');
    //when this function is called, change the view in the state
    //if the state is 'Homepage'
    if (this.state.view === 'Homepage') {
      //then set it to Carousel
      this.setState({
        view: 'Carousel'
      });
      //else if the state is 'Carousel'
    } else if (this.state.view === 'Carousel') {
      //then set it to 'Homepage
      this.setState({
        view: 'Homepage'
      });
    }
  };

  //function to change the current pic in the modal
  changeModalPic(clickedPhoto) {
    console.log('changing pic', clickedPhoto);
    //set the state of the current photo to the photo that was clicked
    this.setState({
      modalCurrentPhoto: clickedPhoto
    });
  }


  render() {
    return (
      <div className='main'>
        {/* if the view is Homepage, then return the Homepage view */}
        {this.state.view === 'Homepage' ?
          <Homepage photos={this.state.photos} changeView={this.changeView} changeModalPic={this.changeModalPic}/> :
          // otherwise, return the Modal view
          <Carousel photos={this.state.photos} changeView={this.changeView} changeModalPic={this.changeModalPic} currentPic={this.state.modalCurrentPhoto}/>
        }
      </div>
    )
  };


};


ReactDOM.render(<App />, document.getElementById('Photos'));
