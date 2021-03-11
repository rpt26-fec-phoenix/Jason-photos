//import faker
const faker = require('faker');

//import aws.js and helpers.js
const aws = require('./aws.js');
const helper = require('./helpers.js')
//connection to the Mongoose database

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/airbnb', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;

//turn the db connection on
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected');
  // we're connected!
});

//define schema for the photos services
const photoSchema = new mongoose.Schema({
  id: Number,
  propertyID : Number,
  url : String,
  text : String,
  primaryPhoto : Boolean,
  // normalSize : Boolean
});


//compile the schema into a model
const Photo = mongoose.model('Photo', photoSchema);


//function to seed data into the database
async function seedData() {
  //call the function from aws.js that will allow me to get all objects in the S3 bucket
    const photoObjects = await aws.getAllObjects();
    console.log(photoObjects);
  //iterate from 1 to 100
    //randomize the number of photos to generate for a specific property - between 10 and 40
    //iterate over this solved number^^ - create that amount of entries
    //if this is the first iteration
      //then the primaryPhoto property will be true

      //create a new entry for normal size
      // const doc = new Photo({
          // id: i
      // })
      //save this entry - it is async!
      //await doc.save();

    //otherwise
      //the primaryPhoto property will be false
      //create a new entry for normal size with primaryProperty as false
      // const doc = new Photo({

      // })
      //save this entry - it is async!
      //await doc.save();

}

//testing function to see if upload to S3 occurs correctly
function test() {
  //generate the photo
  var generatedPhotos = helper.generatePhotos();
  //upload the normal photo to S3 - set this to a variable
  const uploadedPhoto = async (generatedPhotos) => {
    try {
      const url = await aws.uploadNormalToS3(generatedPhotos);
      //console log the variable -> this should return the url
      console.log(url);
    } catch (err) {
      console.log(err);
    }
  };
}

// test();

//invoke seeding function
seedData();








      //store a generated thumbnail photo (corresponds to the one above) in a variable
      //upload this random house photo to S3
      //create a new entry for thumbnail size
      //save this entry - REMEMBER, it is async!