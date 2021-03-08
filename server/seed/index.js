//connection to the Mongoose database

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:7676/airbnb', {useNewUrlParser: true});

const db = mongoose.connection();

//turn the db connection on
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected');
  // we're connected!
});

//define schema for individual photos
const individualPhotos = new mongoose.Schema({
  url : String,
  text : String,
  primaryPhoto : Boolean,
  largeSize : Boolean
});

//define schema for the photos service
const photoSchema = new mongoose.Schema({
  propertyID : Number,
  photoData : [individualPhotos]
});


//compile the schema into a model
const Photo = mongoose.model('Photo', photoSchema);


//function to seed data into the database



//invoke seeding function