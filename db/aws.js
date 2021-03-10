//this module will handle the logic of working with aws

require('dotenv').config();

const aws = require('aws-sdk');

const s3 = new AWS.S3({
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  }
});

//function to handle upload to S3 - must return the new url
