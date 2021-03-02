'use strict';

//if any 1st party dependencies
// 3rd party dependencies 
const express = require('express');
const app = express();

//internal modules
const notFound = require('./src/error-handlers/404');
const errors = require('./src/error-handlers/500');
const logger = require('./src/middleware/logger.js');
const productRoutes = require('./src/server.js');

//internal constants

app.use(express.json());

app.use(productRoutes);//This makes routes modular

//Needs to run for everything
app.use('*', notFound);

//error handling middleware always belongs at the bottom
app.use(errors);



