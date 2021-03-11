//import faker
const faker = require('faker');

//import aws.js and helpers.js
const aws = require('./aws.js');
const helper = require('./helpers.js')
//connection to the Mongoose database

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:9000/airbnb', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;

//turn the db connection on
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected');
  // we're connected!
});

//define schema for the photos service
const photoSchema = new mongoose.Schema({
  propertyID : Number,
  url : String,
  text : String,
  primaryPhoto : Boolean,
  normalSize : Boolean
});


//compile the schema into a model
const Photo = mongoose.model('Photo', photoSchema);


//function to seed data into the database
function seedData() {
  //iterate from 1 to 100
    //randomize the number of photos to generate for a specific property - between 10 and 40
    ///iterate over this solved number^^ - create that amount of entries (multiplied by 2 - one for normal and one for thumbnail)
    //if this is the first iteration
      //then the primaryPhoto property will be true

      //store a generated random house photo in a variable
      //upload this random house photo to S3
      //create a new entry for normal size
      // const doc = new Photo({

      // })
      //save this entry - it is async!
      //await doc.save();
      //store a generated thumbnail photo (corresponds to the one above) in a variable
      //upload this random house photo to S3
      //create a new entry for thumbnail size
      //save this entry - REMEMBER, it is async!

    //otherwise
      //the primaryPhoto property will be false
        //store a generated random house photo in a variable
      //upload this random house photo to S3
      //create a new entry for normal size
      // const doc = new Photo({

      // })
      //save this entry - it is async!
      //await doc.save();
      //store a generated thumbnail photo (corresponds to the one above) in a variable
      //upload this random house photo to S3
      //create a new entry for thumbnail size
      //save this entry - REMEMBER, it is async!
}

//testing function to see if upload to S3 occurs correctly
function test() {
  //generate the photo
  var generatedPhotos = helper.generatePhotos();
  //upload the normal photo to S3 - set this to a variable
  const uploadedPhoto = async (generatedPhotos) => {
    try {
      const url = await aws.uploadNormalToS3();
      //console log the variable -> this should return the url
      console.log(url);
    } catch (err) {
      console.log(err);
    }
  };
  //upload the thumbnail photo to s3??
}

test();


//invoke seeding function