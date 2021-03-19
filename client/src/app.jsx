import React from 'react';
import ReactDOM from 'react-dom';
import Homepage from './components/Homepage.jsx';
import Modal from './components/Modal.jsx';

import axios from 'axios';


class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      view: 'Homepage',
      photos: []
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
    axios.get(`/photos/5`)
    .then((result) => {
      console.log('FETCH RESULT', result.data);
      this.setState({
        photos: result.data
      });
    })
  };

  render() {
    //if the view is Homepage, then return the Homepage view
    if (this.state.view === 'Homepage') {
      return <Homepage photos={this.state.photos}/>
    }
    //otherwise, return the Modal view
    {return <Modal photos={this.state.photos}/>}
  }

  //function to change the view
  changeView() {

  };

};


ReactDOM.render(<App/>, document.getElementById('Photos'));
