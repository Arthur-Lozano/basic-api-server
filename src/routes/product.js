'use strict';

const express = require('express');
const ProductModel = require('./models/product.js');

//Initiate new category/product
const items = new ProductModel();


const router = express.router();

//routes for Products

router.get('/products', getProducts);
router.get('/products/:id', getOneProduct);
router.post('/products', createProduct);
router.put('/products/:id', updateProduct);
router.delete('/products/:id', deleteProduct);




//Product
function getProducts(req, res){
  //Get all items from a databae -> CRUD
  let all = items.get();
  //Send items back to user or the -> Response
  res.status(200).json(all);
}


//getOneProduct
function getOneProduct(req, res){
  let id = parseInt(req.params.id);
  let item = items.get(id);
  res.status(200).json(item);
}


//Create Product
function createProduct(req, res){
  let obj = req.body;
  let newItem = items.create(obj);
  res.status(201).json(newItem);
}


//update Product list/localhost:3333/things/1
function updateProduct(req, res){
  let id = parseInt(req.params.id);
  let content = req.body;
  let updated = items.update(id, content);
  res.status(200).json(updated);
}


function deleteProduct(req, res){
  let id = parseInt(req.params.id);
  let deleted = items.delete(id);
  res.status(204).send('item deleted');
}


module.exports = router;
