console.log('Starting PASSWORD MANAGER');

let storage = require('node-persist');

storage.initSync();

let argv = require('yargs')
  .command('create', 'Create a new account', function(yargs) {
    yargs
      .options({
        name: {
          demand: true,
          alias: 'n',
          description: 'Account name(eg: Facebook, Google, etc)',
          type: 'string'
        },
        username: {
          demand: true,
          alias: 'u',
          description: 'Account username or email',
          tyoe: 'string'
        },
        password: {
          demand: true,
          alias: 'p',
          description: 'Account password',
          type: 'string'
        }
      })
      .help('help');
  })
  .command('get', 'get and existing account', function(yargs) {
    yargs
      .options({
        name: {
          demand: true,
          alias: 'n',
          description: 'Account name(eg: Facebook, Google, etc)',
          type: 'string'
        }
      })
      .help('help');
  })
  .help('help').argv;
let command = argv._[0];

function createAccount(account) {
  let accounts = storage.getItemSync('accounts');

  if (accounts === undefined) {
    accounts = [];
  }

  accounts.push(account);
  storage.setItemSync('accounts', accounts);

  return account;
}

function getAccount(accountName) {
  let accounts = storage.getItemSync('accounts');
  let matchAccount;

  accounts.forEach(function(account) {
    if (account.name === accountName) {
      matchAccount = account;
    }
  });
  return matchAccount;
}

if (command === 'create') {
  let createdAccount = createAccount({
    name: argv.name,
    userName: argv.username,
    password: argv.password
  });
  console.log('Account created');
  console.log(createdAccount);
} else if (command === 'get') {
  let fetchedAccount = getAccount(argv.name);
  if (typeof fetchedAccount === 'undefined') {
    console.log('Account not found');
  } else {
    console.log('Account found');
    console.log(fetchedAccount);
  }
}
