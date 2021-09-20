const { UP, DOWN, LEFT, RIGHT, MESSAGES } = require('./constants');

let connection;

const handleUserInput = (data) => {
  if (data === '\u0003') {
    console.log('exiting server');
    process.exit();
  }

  if (data === 'w') {
    connection.write(UP);
  }
  if (data === 'a') {
    connection.write(LEFT);
  }
  if (data === 's') {
    connection.write(DOWN);
  }
  if (data === 'd') {
    connection.write(RIGHT);
  }
  if (data in MESSAGES) {
    connection.write(MESSAGES[data]);
  }
};

// setup interface to handle user input from stdin
const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  stdin.on('data', handleUserInput);

  return stdin;
};

// handleUserInput is only called by setupInput which is already in the same file. Since handleUserInput does not need to be called or referenced elsewhere, it does not need to be exported from the input module.
module.exports = { setupInput };
