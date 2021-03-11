//this module will handle the logic of working with aws

require('dotenv').config();

const aws = require('aws-sdk');

//create global counter var
var counter = 1;

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: 'us-west-1'
});

//function to handle upload to S3 of normal photo - must return the new url
const uploadNormalToS3 = async (imageUrl) => {
  //create name for the uploaded file
  //put the object into S3
  await s3.putObject({
    Key: `normalphoto-${counter}`,
    Bucket: testairbnbphotos,
    ContentType: 'image/jpeg',
    Body: imageUrl,
    ACL: 'public-read'
  }).promise();
  //increment the counter after adding a new normal photo
  counter++;
  return `https://${process.env.BUCKET_NAME}.s3.us-west-1.amazonaws.com/normalphoto-${counter}`;
};

//function to handle upload to S3 of thumbnail photo - must return the new url
const uploadThumbnailToS3 = async (imageUrl) => {
  //create name for the uploaded file
  //put the object into S3
  await s3.putObject({
    Key: `thumbphoto-${counter}`,
    Bucket: testairbnbphotos,
    ContentType: 'image/jpeg',
    Body: imageUrl,
    ACL: 'public-read'
  }).promise();
  return `https://${process.env.BUCKET_NAME}.s3.us-west-1.amazonaws.com/thumbphoto-${counter}`;
};



const uploadFunc = async () => {
  try {
    const url = await uploadTo3(url);
  } catch (err) {
    console.log(err);
  }
};