'use strict';
require("dotenv").config();
let PORT = process.env.PORT ;
const server = require("./src/server");
const { db } = require('./src/models/index');

db.sync().then(() => {
    server.start(PORT);
})