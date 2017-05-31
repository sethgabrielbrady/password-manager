# Password Manager

A simple password manager written in javascript using node.
``node-persist`` will create a folder in the root called ``persist``. In it you will
see a ``json`` file called 'accounts'.  This is the file that stores all the accounts
data created. The app uses ``yargs ``  to get input from the user in the terminal and
uses ``crypto-js`` to encrypt the ``json`` file stored in the persist folder.

##### THIS WAS AN EXERCISE IN NODE. YOU MAY NOT WANT TO USE THIS TO STORE IMPORTANT INFORMATION.


## Getting Started

1. Clone the repository
2. run ``npm install``
3. run ``npm start`` in the terminal.
4. To store or retrieve account information:

For storing account information, go into the  command terminal and type

`node app.js create -n <Account name> -u <UserName> -p <Account Password> -m <Master Password>`

This will  encrypt and store the object inside the `` persist `` folder in the root directory. The master password will be used to retrieve the account information.

To retrieve account information, go into the  command terminal and type

`node app.js  get -n <Account Name> -m <Master Password>`

 This will decrypt and return the account data as an object.

## FUTURE UPDATES
For now, everything is handled directly inside the ``app.js`` file. In the next update, i'd like to move encryption and decryption into separate modules. I will also be adding some checks for the `master passeord` to ensure a certain amount of characters are used, certain types of characters are used, etc.

## MODULES

####  node-persist 0.0.6
https://www.npmjs.com/package/node-persist

"Node-persist doesn't use a database. Instead, JSON documents are stored in the file system for persistence. Because there is no network overhead and your data is just in-memory, node-persist is just about as fast as a database can get. Node-persist uses the HTML5 localStorage API, so it's easy to learn."

#### yargs 3.15.0
https://www.npmjs.com/package/yargs

"Yargs be a node.js library fer hearties tryin' ter parse optstrings.
With yargs, ye be havin' a map that leads straight to yer treasure!
Treasure of course, being a simple option hash."

#### crypto-js 3.1.5
https://www.npmjs.com/package/crypto-js

"JavaScript library of crypto standards."
