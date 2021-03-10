//this module will contain some helper functions

//create randomizer for the page number
const pageNumber = Math.floor(Math.random() * 5000);
//helper function to generatePhoto
function generatePhoto() {
  //fetch a random photo from the houses+interior unsplash url
  fetch(`https://api.unsplash.com/search/photos?page=${pageNumber}&query=houses-and-interior&per_page=1&client_id=${process.env.UNSPLASH_ACCESS_KEY}`)
    // .then((response) => response.json())
    .then((data) => console.log(data))
    .catch(function (error) {
      console.log('Error', error);
    });
};

//helper function to resize photo to thumbnail
function generateThumbnail() {

};



module.exports = {
  generatePhoto,
  generateThumbnail
}