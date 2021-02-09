//sets
const ids = new Set(['ji', 'thus', 'set']);
ids.add(22);
ids.delete('set');
console.log(ids);

for (const entry of ids.entries()) {
  console.log(entry); // will give 2 values
}

//Maps

const person1 = { name: 'Max' };
const person2 = { name: 'Manuel' };

const personData = new Map([
  ['key1', 'somewValue'],
  ['onemore', 'onemorevalue'],
  [person1, [{ date: 'yesday' }]],
]);

console.log(personData.get(person1));

for (const [key, value] of personData.entries()) {
  console.log(key, value);
}

for (const key of personData.keys()) {
  console.log(key);
}

//weakset

let persWeak = { name: 'Max2' };
const persons = new WeakSet();
persons.add(persWeak);
// persWeak = null; // will be garbage collected
console.log(persons);

//weakmap
const personD = new WeakMap();
personD.set(persWeak, 'asdas');
persWeak = null; // will get garbage collected
console.log(personD);

// same
