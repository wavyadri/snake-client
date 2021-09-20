//  main file through which you will launch the game client.

// sets up a connection and returns an object
const { connect } = require('./client');

const handleUserInput = (key) => {
  if (key === '\u0003') {
    console.log('exiting server');
    process.exit();
  }
};

// setup interface to handle user input from stdin
const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  stdin.on('data', handleUserInput);

  return stdin;
};

setupInput();

console.log('Connecting ...');
connect();
