// establishes a connection with the game server
const net = require('net');
const { IP, PORT } = require('./constants');

const connect = function () {
  const name = 'suh';

  // this conn obj represents the connection that you have with the server.
  const conn = net.createConnection({
    host: IP, // IP address here,
    port: PORT, // PORT number here,
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
