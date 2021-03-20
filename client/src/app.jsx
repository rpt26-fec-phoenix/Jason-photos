import React from 'react';
import ReactDOM from 'react-dom';
import Homepage from './components/Homepage.jsx';
import Modal from './components/Modal.jsx';

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
      ]
    };
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
    // const propID = url[]
    //send GET to /photos/${propID}
    axios.get(`/photos/1`)
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

  render() {
    return (
      <div className='main'>
        {/* if the view is Homepage, then return the Homepage view */}
        {this.state.view === 'Homepage' ?
          <Homepage photos={this.state.photos} /> :
          // otherwise, return the Modal view
          <       Modal photos={this.state.photos} />
        }
      </div>
    )

  };

  //function to change the view
  changeView() {

  };

};


ReactDOM.render(<App />, document.getElementById('Photos'));
