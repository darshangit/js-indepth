const storeBtn = document.getElementById('store-btn');
const retBtn = document.getElementById('retrieve-btn');

const dbRequest = indexedDB.open('StorageDummy', 1);
let db;

// will run first time or when oversion number changes - 1 at the top
dbRequest.onupgradeneeded = function (event) {
  // Its called as Object stores not tables
  db = event.target.result;

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

dbRequest.onsuccess = function (event) {
  db = event.target.result;
};

dbRequest.onerror = function (event) {
  console.log('ERROR1');
};

storeBtn.addEventListener('click', () => {
  const productStore = db
    .transaction('products', 'readwrite')
    .objectStore('products'); //readonly
  productStore.add({
    id: 'p3',
    title: 'A Second Product',
    price: 12.99,
    tags: ['Expensive', 'Luxury'],
  });
});

retBtn.addEventListener('click', () => {
  const productStore = db
    .transaction('products', 'readonly')
    .objectStore('products');

  const request = productStore.get('p2');
  request.onsuccess = function () {
    console.log(request.result);
  };
});
