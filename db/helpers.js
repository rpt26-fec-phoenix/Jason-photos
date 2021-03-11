//this module will contain some helper functions

//import axios
const axios = require('axios');

//create randomizer for the page number
const pageNumber = Math.floor(Math.random() * 5000);
//helper function to generatePhoto
function generatePhotos() {
  //fetch a random photo from the houses+interior unsplash url
  axios.get(`https://api.unsplash.com/search/photos?page=${pageNumber}&query=houses-and-interior&per_page=1&orientation=landscape&client_id=${process.env.UNSPLASH_ACCESS_KEY}`)
    .then((response) => {
      //create a photos array
      var photos = [];
      //get the normal sized photo and push to photos array
      var normalPhoto = response.data.results[0].urls.regular;
      photos.push(normalPhoto);
      //get the thumbnail sized photo and push to photos array
      var thumbPhoto = response.data.results[0].urls.thumb;
      photos.push(thumbPhoto);
      console.log(photos);
      return photos;
    })
    .catch(function (error) {
      console.log('Error', error);
    });
};

//helper function to resize photo to thumbnail
/* WILL NOT USE */
function generateThumbnail() {

};



module.exports = {
  generatePhotos,
  generateThumbnail
}