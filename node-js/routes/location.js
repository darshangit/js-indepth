const express = require('express');

const router = express.Router();
const locatonStorage = {
  locations: [],
};
router.post('/add-location', (req, res, next) => {
  locatonStorage.locations.push({
    id: Math.random(),
    address: req.body.address,
    coords: { lat: req.body.lat, lng: req.body.lng },
  });
  res.json({message: 'Stored Location!'});
});

router.get('/location', (req, res, next) => {});

module.exports = router;
