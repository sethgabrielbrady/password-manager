console.log('Starting PASSWORD MANAGER');

let storage = require('node-persist');
storage.initSync();

let sethAccount = {
  name: 'Google',
  username: 'sethbrady',
  password: '1234'
};

let JuliaAccount = {
  name: 'Yahoo',
  username: 'js1221',
  password: '1221'
};

let catAccount = {
  name: 'Tinder',
  username: 'Kat',
  password: 'meow'
};

function createAccount(account){
  let accounts = storage.getItemSync('accounts');

  if(accounts === undefined){
    accounts = [];
  }

  accounts.push(account);
  storage.setItemSync('accounts', accounts);

  return account;
}

function getAccount(accountName) {

  let accounts = storage.getItemSync('accounts');
  let matchAccount;

  accounts.forEach(function(account){
    if (account.name === accountName){
      matchAccount = account;
    }
  });
  return matchAccount;
}

// createAccount(sethAccount);
// createAccount(JuliaAccount);
// createAccount(catAccount);

let googleAccount = getAccount('Google');
console.log(googleAccount);

let yahooAccount = getAccount('Yahoo');
console.log(yahooAccount);

let tinderAccount = getAccount('Tinder');
console.log(tinderAccount);
