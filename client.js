// establishes a connection with the game server
const net = require('net');

const connect = function () {
  const name = 'yzz';

  // this conn obj represents the connection that you have with the server.
  const conn = net.createConnection({
    host: '135.23.223.133', // IP address here,
    port: 50542, // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding('utf8');

  conn.on('data', (data) => {
    console.log('Received: ' + data);
  });

  conn.on('connect', () => {
    console.log('You are connected to the game server!');
    conn.write(`Name: ${name}`);
  });

  return conn;
};

module.exports = { connect };
