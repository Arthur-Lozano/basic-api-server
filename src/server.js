'use strict';

const express = require('express');
const app = express();

const categoryRoute = require('./routes/category.js');
const productRoute = require('./routes/product.js');
const notFoundHandler = require('./error-handlers/404.js');
const errorHandler = require('./error-handlers/500.js');
app.use(express.urlencoded());
app.use(categoryRoute);
app.use(productRoute);



app.use('*', notFoundHandler);
app.use(errorHandler);


function start(port) {
  app.listen(port, () => console.log(`Server up on port ${port}`))
}


module.exports = {
  app: app,
  start: start
}
