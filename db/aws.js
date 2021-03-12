//this module will handle the logic of working with aws

require('dotenv').config();

const aws = require('aws-sdk');

//create global counter var
var counter = 1;

//to enable promises for aws s3
aws.config.setPromisesDependency();

const s3 = new aws.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: 'us-west-1'
});

//function to handle upload to S3 of normal photo - must return the new url
const uploadNormalToS3 = async (images) => {
  console.log('HEY THERE', images[0]);
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
  console.log('HEY THERE', images[1]);
  //put the object into S3
  // await s3.putObject({
  //   Key: `thumbphoto-${counter}`,
  //   Bucket: process.env.BUCKET_NAME,
  //   ContentType: 'image/jpeg',
  //   Body: images[1],
  //   ACL: 'public-read'
  // }).promise();
  var params = {Bucket: process.env.BUCKET_NAME, Key: `thumbphoto-${counter}`, Body: images[1]};
  s3.upload(params, function(err, data) {
    //err check
    if (err) {
      console.log('ERR', err);
    } else {
      console.log('DATA', data);
    }
});
  return `https://${process.env.BUCKET_NAME}.s3.us-west-1.amazonaws.com/thumbphoto-${counter}`;
};


//function to get all Objects in my S3 bucket
const getAllObjects = async () => {
  try {
    const response = await s3.listObjectsV2({
      Bucket: process.env.BUCKET_NAME
    }).promise();
    return response;
    //TODO = return the response
  } catch (e) {
    console.log('Error', e);
  }
};


module.exports = {
  getAllObjects
}
