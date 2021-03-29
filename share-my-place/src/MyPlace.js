import { Map } from './UI/Map';
class LoadedPlace {
  constructor(coordinates, address) {
    new Map(coordinates);
    const headerTitleEl = document.querySelector('header h1');
    headerTitleEl.textContent = address;
  }
}
const url = new URL(location.href);
const queryParams = url.searchParams; // values after ? in URL in key value pair
// const coords = {
//   lat: parseFloat(queryParams.get('lat')),
//   lng: +queryParams.get('lng'),
// };

// const address = queryParams.get('address');
const locId = queryParams.get('location');
fetch('http://localhost:3000/location/' + locId)
  .then((resp) => {
    if (resp.status === 404) {
      throw new Error('Could not find location');
    }
    return resp.json();
  })
  .then((data) => {
    new LoadedPlace(data.coordinates, data.address);
  })
  .catch((err) => {
    alert(err.message);
  });
