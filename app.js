console.log('Starting PASSWORD MANAGER');

let storage = require('node-persist');
storage.initSync();

// storage.setItemSync('accounts', [{
//   username: 'Seth',
//   balance: 0
// }]);

let accounts = storage.getItemSync('accounts');
console.log(accounts);
