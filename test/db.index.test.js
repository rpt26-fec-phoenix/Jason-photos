//require the helper functions from the database
const db = require('../db/index.js');

//test db functions
describe('test database functions', () => {
  //test the retrievePhotoObjs db function
  describe('test retrievePhotoObjs function', () => {
    test('should return an array of photo objects', async () => {
      const photo = await db.retrievePhotoObjs(50);
      expect(Array.isArray(photo)).toBe(true);
    });

    xtest('should return information for the correct propertyID', () => {

    });

    xtest('should contain an amount of photos between 5 and 40', () => {

    });

    test('each object in the array should contain the correct keys', async () => {
      const schemaExample = {
        propertyID: 0,
        photoOrderId: 0,
        url: '',
        text: '',
        primaryPhoto: false
      };
      const photo = await db.retrievePhotoObjs(24);
      //iterate over the keys in the schemaExample
      for (let key in schemaExample) {
        //check to see if that key for photo is not undefined
        expect(photo[0][key]).not.toBe('undefined');
      }
    })
  })
  //test the retrievePrimary db function
  describe('test retrievePrimary function', () => {
    test('should return one item that is a string', () => {

    });

    //test('')

  })
});