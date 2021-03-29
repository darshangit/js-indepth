import { Modal } from './UI/Modal';
import { Map } from './UI/Map';
import { getAddressFromCoords, getCoordsFromAddress } from './Utility/Location';
class PlaceFinder {
  constructor() {
    const addressForm = document.querySelector('form');
    const locateUserBtn = document.getElementById('locate-btn');
    this.shareBtn = document.getElementById('share-btn');

    locateUserBtn.addEventListener(
      'click',
      this.locateUserBtnHandler.bind(this)
    );
    addressForm.addEventListener('submit', this.findAddressHandler.bind(this));
    this.shareBtn.addEventListener('click', this.sharePlaceHandler);
  }

  sharePlaceHandler() {
    const shareLinkedInput = document.getElementById('share-link');

    if (!navigator.clipboard) {
      shareLinkedInput.select();
      return;
    }
    navigator.clipboard
      .writeText(shareLinkedInput.value)
      .then(() => {
        alert('copied to clipboard');
      })
      .catch((err) => {
        console.log(err);
        shareLinkedInput.select();
      });
  }
  selectPlace(coordinates, address) {
    if (this.map) {
      this.map.render(coordinates);
    } else {
      this.map = new Map(coordinates);
    }
    // making a call to node-js/ express
    fetch('http://localhost:3000/add-location', {
      method: 'POST',
      body: JSON.stringify({
        address: address,
        lat: coordinates.lat,
        lng: coordinates.lng,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((resp) => {
        return resp.json();
      })
      .then((data) => {
        console.log(data);
      });
    this.shareBtn.disabled = false;
    const shareLinkedInput = document.getElementById('share-link');
    shareLinkedInput.value = `${location.origin}/my-place/?address=${encodeURI(
      address
    )}&lat=${coordinates.lat}&lng=${coordinates.lng}`;
  }

  locateUserBtnHandler() {
    if (!navigator.geolocation) {
      alert(
        'Location feature is unavail in your browser - Manually enter the address or use a more mordern browsers.'
      );
      return;
    }
    const modal = new Modal(
      'loading-modal-content',
      'Loading Location - Please Wait'
    );
    modal.show();
    navigator.geolocation.getCurrentPosition(
      async (successResult) => {
        const coordinates = {
          lat: successResult.coords.latitude,
          lng: successResult.coords.longitude,
        };
        const address = await getAddressFromCoords(coordinates);
        modal.hide();
        this.selectPlace(coordinates, address);
      },
      (error) => {
        modal.hide();
        alert('Could not locate you - Please manually enter the address');
      }
    );
  }

  async findAddressHandler(event) {
    event.preventDefault();
    const address = event.target.querySelector('input').value;
    if (!address || address.trim().length === 0) {
      alert('Invalid address entered - try again');
      return;
    }
    const modal = new Modal(
      'loading-modal-content',
      'Loading Location - Please Wait'
    );

    modal.show();
    try {
      const coordinates = await getCoordsFromAddress(address);
      this.selectPlace(coordinates, address);
    } catch (error) {
      alert(error.message);
    }
    modal.hide();
  }
}

new PlaceFinder();
