import { Modal } from './UI/Modal';

class PlaceFinder {
  constructor() {
    const addressForm = document.querySelector('form');
    const locateUserBtn = document.getElementById('locate-btn');

    locateUserBtn.addEventListener('click', this.locateUserBtnHandler);
    addressForm.addEventListener('click', this.findAddressHandler);
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
      (successResult) => {
        modal.hide();
        const coordinates = {
          lat: successResult.coords.latitude,
          lng: successResult.coords.longitude,
        };
        console.log(coordinates);
      },
      (error) => {
        modal.hide();
        alert('Could not locate you - Please manually enter the address');
      }
    );
  }

  findAddressHandler() {}
}

new PlaceFinder();
