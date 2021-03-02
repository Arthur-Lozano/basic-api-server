'use strict';

const express = require('express');
const CategoryModel = require('./models/category.js');

//Initiate new category/product
const category = new CategoryModel();


const router = express.Router();



//routes for Proucts

router.get('/category', getCategory);
router.get('/category/:id', getOneCategory);
router.post('/category', createCategory);
router.put('/category/:id', updateCategory);
router.delete('/category/:id', deleteCategory);

//Category
function getCategory(req, res){
  //Get all items from a databae -> CRUD
  let all = category.get();
  //Send items back to user or the -> Response
  res.status(200).json(all);
}

//getOneCategory
function getOneCategory(req, res){
  let id = parseInt(req.params.id);
  let category = category.get(id);
  res.status(200).json(category);
}

//Create category
function createCategory(req, res){
  let obj = req.body;
  let newItem = category.create(obj);
  res.status(201).json(newItem);
}

//update Category
function updateCategory(req, res){
  let id = parseInt(req.params.id);
  let content = req.body;
  let updated = category.update(id, content);
  res.status(200).json(updated);
}

function deleteCategory(req, res){
  let id = parseInt(req.params.id);
  let deleted = category.delete(id);
  res.status(204).send('item deleted');
}
module.exports = router;
