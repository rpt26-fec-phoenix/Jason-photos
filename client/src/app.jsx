import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.component() {
  constructor (props) {
    super(props);
    this.state = {
      view: 'Homepage',
      photos: []
    };
  }

  //as soon as the component mounts, send a GET request for the propID data
  componentDidMount() {
    //send GET to /photos/:propertyID
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
