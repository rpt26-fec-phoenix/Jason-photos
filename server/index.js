//module for my express server

const express = require('express');

const app = express();

const port = 7676;

const photos = require('../db/index.js');

//will serve 2 routes - one to retrieve all photo data for a specific property id
app.get('/photos/:propertyID', (req, res) => {
  //retrieve all documents with the property id as that passed in
  photos.find({ propertyID: req.params.propertyID}, function (err, docs) {
    //err check
    if (err) {
      console.log('Error with retrieving photos');
      res.send(500);
    } else {
      res.send(docs);
    }
  });
});


//and a route to retrieve the primary photo url for a specific property id
app.get('/photos/:propertyID/primaryPhoto', (req, res) => {
  //retrieve the document that matches the propertyID passed in as well as a primaryPhoto bool val of true
  photos.find({ propertyID: req.params.propertyID, primaryPhoto: true}, function (err, doc) {
    //err check
    if (err) {
      console.log('Error with retrieving photo primary url');
      res.send(500);
    } else {
      //find the url from the retrieved doc
      console.log(doc);
      res.send(doc[0].url);
    }
  });
});


app.listen(port, () => {
  console.log(`Connected, app listening on port ${port}`);
})