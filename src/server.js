'use strict';

const express = require('express');
const itemModel = require('../models/category');
const productModel = require('../models/product');

//Initiate new category/product
const items = new productModel();

const router = express.Router();

//routes

router.get('', getProducts);
router.get('', getProducts);
router.post('', getProducts);
router.put('', getProducts);
router.delete('', getProducts);

function getProducts(req, res){
  //Get all items from a databae -> CRUD
  let all = items.get();
  //Send items back to user or the -> Response
  res.status(200).json(all);
}

function getOneProduct(req, res){
  let id = parseInt(req.params.id);
  let item = items.get(id);
  res.status(200).json(item);
}

function createProduct(req, res){
  let obj = req.body;
  let newItem = items.create(obj);
  res.status(201).json(newItem);
}

//localhost:3333/things/1
function updateProduct(req. res){
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