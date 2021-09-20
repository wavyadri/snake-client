//  main file through which you will launch the game client.

// sets up a connection and returns an object
const { connect } = require('./client');
const { setupInput } = require('./input');

console.log('Connecting ...');
connect();

setupInput();
