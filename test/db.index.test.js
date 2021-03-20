//require the helper functions from the database
const db = require('../db/index.js');

//test db functions
describe('test database functions', () => {
  //test the retrievePhotoObjs db function
  describe('test retrievePhotoObjs function', () => {
    test('should return an array of photo objects', async (next) => {
      const photo = await db.retrievePhotoObjs(50);
      expect(Array.isArray(photo)).toBe(true);
      next();
    });

    test('should return information for the correct propertyID', async (next) => {
      const photo = await db.retrievePhotoObjs(24);
      for (var i = 0; i < photo.length; i++) {
        expect(photo[i].propertyID).toBe(24);
      }
      next();
    });

    test('should contain an amount of photos between 5 and 40', async (next) => {
      const photo = await db.retrievePhotoObjs(99);
      expect(photo.length).toBeGreaterThanOrEqual(5);
      expect(photo.length).toBeLessThanOrEqual(40);
      next();
    });

    test('each object in the array should contain the correct keys', async (next) => {
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
      next();
    });
  });
  //test the retrievePrimary db function
  describe('test retrievePrimary function', () => {
    test('should return one item that is a string', async (next) => {
      var randomNum = Math.floor(Math.random() * 100) + 1;
      const primaryPhoto = await db.retrievePrimary(randomNum);
      expect(typeof primaryPhoto).toEqual('string');
      next();
    });

    //test('')

  })
});