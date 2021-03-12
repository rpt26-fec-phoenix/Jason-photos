//enable the dotenv functionality
require('dotenv').config();

//import faker
const faker = require('faker');

//import aws.js and helpers.js
const aws = require('./aws.js');
const helper = require('./helpers.js')
//connection to the Mongoose database

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/airbnb', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

//turn the db connection on
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('Connected');
  // we're connected!
});

//define schema for the photos services
const photoSchema = new mongoose.Schema({
  propertyID: Number,
  photoOrderId: Number,
  url: String,
  text: String,
  primaryPhoto: Boolean
});


//compile the schema into a model
const Photo = mongoose.model('Photo', photoSchema);


//function to seed data into the database
async function seedData() {
  try {
    //call the function from aws.js that will allow me to get all objects in the S3 bucket
    const photoObjects = await aws.getAllObjects();
    // console.log(photoObjects);
    //iterate from 1 to 100
    for (var i = 1; i <= 100; i++) {
      //randomize the number of photos to generate for a specific property - between 5 and 40
      var numOfPhotos = Math.floor(Math.random() * 35) + 5;
      //iterate over this solved number^^ - will create that amount of entries
      for (var j = 0; j < numOfPhotos; j++) {
        //set primary photo var
        var primary = true;
        //if this is not the first iteration
        if (j > 0) {
          //then the primaryPhoto property will be false
          primary = false;
        }
          //randomly generate a num for the index we are pulling from (based on the length of the photo array)
          var indexNum = Math.floor(Math.random() * photoObjects.Contents.length);
          //create var for the key from the randomly generated index
          var key = photoObjects.Contents[indexNum].Key;
          //create a new entry for normal size
          const doc = new Photo({
            propertyID: i,
            photoOrderId: j,
            url: `https://${process.env.BUCKET_NAME}.s3.us-west-1.amazonaws.com/${key}`,
            text: faker.lorem.sentence(),
            primaryPhoto: primary
          });
          //save this entry - it is async!
          await doc.save();
      }
    }
    //console.log message once all done with seeding
    console.log('finished seeding.');
  } catch (err) {
    console.log('Error with seeding', err);
  }
};


//invoke seeding function
//seedData();
