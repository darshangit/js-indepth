const express = require('express');
const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const router = express.Router();

const url = 'mongodb+srv://';

const client = new MongoClient(url);


const locatonStorage = {
  locations: [],
};
router.post('/add-location', (req, res, next) => {
//   const id = Math.random();

  (async function() {
    try {
      await client.connect();
      console.log("Connected correctly to server");
      const db = client.db('locations');
  
      // Insert a single document
      let r = await db.collection('user-locations').insertOne({
        // id: id,
        address: req.body.address,
        coords: { lat: req.body.lat, lng: req.body.lng },
      });
  
      console.log(r);
      res.json({ message: 'Stored Location!', locId: r.insertedId});
      // Close connection
      client.close();
    } catch(err) {
      console.log(err.stack);
    }
  })();

//   locatonStorage.locations.push({
//     id: id,
//     address: req.body.address,
//     coords: { lat: req.body.lat, lng: req.body.lng },
//   });
});

router.get('/location/:lid', (req, res, next) => {
  const locationId = req.params.lid;
//   const location = locatonStorage.locations.find((loc) => {
//     return loc.id === locationId;
//   });

(async function() {
    try {
      await client.connect();
      console.log("Connected correctly to server");
      const db = client.db('locations');
  
      // Insert a single document
      let r = await db.collection('user-locations').findOne({
        _id: new mongodb.ObjectId(locationId)
      });
  
      console.log(r);
      if (!r) {
        return res.status(404).json({ message: 'Not Found!!' });
      }
      res.json({ address: r.address, coordinates: r.coords });

      // Close connection
      client.close();
    } catch(err) {
      console.log(err.stack);
    }
  })();


});

module.exports = router;
