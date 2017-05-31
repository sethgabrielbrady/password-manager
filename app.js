console.log("starting password manager");

let crypto = require("crypto-js");
let storage = require("node-persist");
storage.initSync();

let argv = require("yargs")
.command("create", "Create a new account", function(yargs) {
  yargs
  .options({
    name: {
      demand: true,
      alias: "n",
      description: "Account name (eg: Google, Instagram)",
      type: "string"
    },
    username: {
      demand: true,
      alias: "u",
      description: "Account username ",
      type: "string"
    },
    password: {
      demand: true,
      alias: "p",
      description: "Account password",
      type: "string"
    },
    masterPass: {
      demand: true,
      alias: "m",
      description: "Master password",
      type: "string"
    }
  })
  .help("help");
})
.command("get", "Get an existing account", function(yargs) {
  yargs
  .options({
    name: {
      demand: true,
      alias: "n",
      description: "Account name (eg: Google, Instagram)",
      type: "string"
    },
    masterPass: {
      demand: true,
      alias: "m",
      description: "Master password",
      type: "string"
    }
  })
  .help("help");
})
.help("help").argv;
let command = argv._[0];

function getAccounts(masterPass) {
  let encryptedAccount = storage.getItemSync("accounts");
  let accounts = [];

  if (typeof encryptedAccount !== "undefined") {
    let bytes = crypto.AES.decrypt(encryptedAccount, masterPass);
    accounts = JSON.parse(bytes.toString(crypto.enc.Utf8));
  }

  return accounts;
}

function saveAccounts(accounts, masterPass) {
  let encryptedAccounts = crypto.AES.encrypt(
    JSON.stringify(accounts),
    masterPass
  );

  storage.setItemSync("accounts", encryptedAccounts.toString());

  return accounts;
}

function createAccount(account, masterPass) {
  let accounts = getAccounts(masterPass);

  accounts.push(account);

  saveAccounts(accounts, masterPass);

  return account;
}

function getAccount(accountName, masterPass) {
  let accounts = getAccounts(masterPass);
  let matchedAccount;

  accounts.forEach(function(account) {
    if (account.name === accountName) {
      matchedAccount = account;
    }
  });

  return matchedAccount;
}

if (command === "create") {
  try {
    let createdAccount = createAccount(
      {
        name: argv.name,
        username: argv.username,
        password: argv.password
      },
      argv.masterPass
    );
    console.log("Account created!");
    console.log(createdAccount);
  } catch (error) {
    console.log("Unable to create and account.");
  }
} else if (command === "get") {
  try {
    let fetchedAccount = getAccount(argv.name, argv.masterPass);

    if (typeof fetchedAccount === "undefined") {
      console.log("Account not found");
    } else {
      console.log("Account found!");
      console.log(fetchedAccount);
    }
  } catch (error) {
    console.log("Unable to fectch the account.");
  }
}
