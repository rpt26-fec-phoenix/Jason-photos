//this module will handle the logic of working with aws

require('dotenv').config();

const aws = require('aws-sdk');

//create global counter var
var counter = 1;

const s3 = new aws.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: 'us-west-1'
});

//function to handle upload to S3 of normal photo - must return the new url
const uploadNormalToS3 = async (images) => {
  console.log(images[0]);
  //put the object into S3
  await s3.putObject({
    Key: `normalphoto-${counter}`,
    Bucket: process.env.BUCKET_NAME,
    ContentType: 'image/jpeg',
    Body: images[0],
    ACL: 'public-read'
  }).promise();
  //increment the counter after adding a new normal photo
  counter++;
  return `https://${process.env.BUCKET_NAME}.s3.us-west-1.amazonaws.com/normalphoto-${counter}`;
};

//function to handle upload to S3 of thumbnail photo - must return the new url
const uploadThumbnailToS3 = async (images) => {
  //put the object into S3
  await s3.putObject({
    Key: `thumbphoto-${counter}`,
    Bucket: process.env.BUCKET_NAME,
    ContentType: 'image/jpeg',
    Body: images[1],
    ACL: 'public-read'
  }).promise();
  return `https://${process.env.BUCKET_NAME}.s3.us-west-1.amazonaws.com/thumbphoto-${counter}`;
};


//create sample array
var testArray = [
  'images.unsplash.com/photo-1560923983-79bfb3d29b77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTM5MjJ8MHwxfHNlYXJjaHwzMTI2fHxob3VzZXMtYW5kLWludGVyaW9yfGVufDB8MHx8fDE2MTU0NDc5NDU&ixlib=rb-1.2.1&q=80&w=108',
  'images.unsplash.com/photo-1560923983-79bfb3d29b77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTM5MjJ8MHwxfHNlYXJjaHwzMTI2fHxob3VzZXMtYW5kLWludGVyaW9yfGVufDB8MHx8fDE2MTU0NDc5NDU&ixlib=rb-1.2.1&q=80&w=200'
];
//upload the normal photo to S3
uploadNormalToS3(testArray);