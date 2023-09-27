require('dotenv').config();

process.env.API_KEY;

const Server = require('./models/server');

const svr = new Server();

svr.listen();