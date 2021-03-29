const express = require('express');

const router = express.Router();
const locatonStorage = {
  locations: [],
};
router.post('/add-location', (req, res, next) => {
  const id = Math.random();
  locatonStorage.locations.push({
    id: id,
    address: req.body.address,
    coords: { lat: req.body.lat, lng: req.body.lng },
  });
  res.json({ message: 'Stored Location!', locId: id });
});

router.get('/location/:lid', (req, res, next) => {
  const locationId = +req.params.lid;
  const location = locatonStorage.locations.find((loc) => {
    return loc.id === locationId;
  });
  if (!location) {
    return res.status(404).json({ message: 'Not Found!!' });
  }
  res.json({ address: location.address, coordinates: location.coords });
});

module.exports = router;
