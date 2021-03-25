const storeBtn = document.getElementById('store-btn');
const retBtn = document.getElementById('retrieve-btn');

const dbRequest = indexedDB.open('StorageDummy', 1);

dbRequest.onupgradeneeded = function (event) {
  // Its called as Object stores not tables
  const db = event.target.result;

  const objStore = db.createObjectStore('products', { keyPath: 'id' });

  objStore.transaction.oncomplete = function (event) {
    const productStore = db
      .transaction('products', 'readwrite')
      .objectStore('products'); //readonly
    productStore.add({
      id: 'p1',
      title: 'A First Product',
      price: 12.99,
      tags: ['Expensive', 'Luxury'],
    });
  };
};

dbRequest.onerror = function (event) {
  console.log('ERROR1');
};

storeBtn.addEventListener('click', () => {});

retBtn.addEventListener('click', () => {});
