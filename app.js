console.log('Starting PASSWORD MANAGER');

let storage = require('node-persist');
storage.initSync();

storage.setItemSync('name', 'Seth');

let name = storage.getItemSync('name');
console.log('Saved name is: ' + name);
