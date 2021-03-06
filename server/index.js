//module for my express server
const db = require('../db/index.js');
const path = require('path');
const express = require('express');
const app = express();
const port = 3002;

//serve up initial html page
app.use(express.static(__dirname + '/../client/dist'));

//will serve 2 routes - one to retrieve all photo data for a specific property id
app.get('/photos/:propertyID', (req, res) => {
  //call the db retrievePhotoObjs function and pass in req and res
  db.retrievePhotoObjs(req.params.propertyID)
    .then((results) => {
      res.send(results);
    })
    .catch((err) => {
      res.status(500);
    })
});


//and a route to retrieve the primary photo url for a specific property id
app.get('/photos/:propertyID/primaryPhoto', (req, res) => {
  db.retrievePrimary(req.params.propertyID)
    .then((url) => {
      res.send(url)
    })
    .catch((err) => {
      res.status(500);
    })
});

  //add one final route to take care of any other endpoints - important to allow sending back of the index.html
  app.get('*', (req, res) => {
    //deliver index.html --> this will deliver the bundle too
    const currPath = path.resolve(__dirname + '/../client/dist/index.html')
    res.sendFile(currPath);
    });


app.listen(port, () => {
  console.log(`Connected, app listening on port ${port}`);
})
