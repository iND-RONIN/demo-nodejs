const http = require('http');
const app = require('./app');
const port =3000;

const server = http.createServer(app);
server.listen(port) ;//this helps the servver to listen to the port we have defined above