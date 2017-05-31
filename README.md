# Password Manager

A simple password manager written in javascript using node and node-persist.


## Getting Started

1. Clone the repository
2. run ``npm install``
3. run ``npm start`` in the terminal.
4. profit!

``node-persist`` will make a folder in the root called ``persist``. In it you will
see a ``json`` file called 'accounts'.  This is the file that stores all the accounts
data created.

## MODULES
###  node-persist 0.0.6
https://www.npmjs.com/package/node-persist

"Node-persist doesn't use a database. Instead, JSON documents are stored in the file system for persistence. Because there is no network overhead and your data is just in-memory, node-persist is just about as fast as a database can get. Node-persist uses the HTML5 localStorage API, so it's easy to learn."

### yargs 3.15.0
https://www.npmjs.com/package/yargs

"Yargs be a node.js library fer hearties tryin' ter parse optstrings.
With yargs, ye be havin' a map that leads straight to yer treasure!
Treasure of course, being a simple option hash."
