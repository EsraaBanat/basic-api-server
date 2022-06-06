'use strict';
require('dotenv').config();
const PORT = process.env.PORT || 3050;
const express = require("express");
const app = express();
const notFoundHandler = require('./error-handlers/404');
const internalErrorHandler = require('./error-handlers/500')
const food = require('./routes/food');
const clothes = require('./routes/clothes');

app.use(express.json());

app.use(food);
app.use(clothes);

app.use("*", notFoundHandler);
app.use(internalErrorHandler);

function start(PORT) {
    app.listen(PORT, () => {
        console.log(`Server Listening on PORT ${PORT}`)
    })
}

module.exports = {
    app,
    start,
}