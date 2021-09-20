let connection;

const handleUserInput = (key) => {
  if (key === '\u0003') {
    console.log('exiting server');
    process.exit();
  }

  if (key === 'w') {
    connection.write('Move: up');
  }
  if (key === 'a') {
    connection.write('Move: left');
  }
  if (key === 's') {
    connection.write('Move: down');
  }
  if (key === 'd') {
    connection.write('Move: right');
  }
  if (key === 'm') {
    connection.write('Say: heyoooo');
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
