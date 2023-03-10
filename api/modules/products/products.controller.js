const productService = require('./products.service');
const mongoose = require('mongoose');

module.exports.listAllProduct = async (req, res) => {
  const products = await  productService.listAllProduct();
  res.send(products)
 } 

 module.exports.addProduct = async (req, res) => {
   const product = await productService.addProduct(req.body);
   res.send(product)
 } 

 module.exports.deleteProduct = async (req, res) => {
   await productService.deleteProduct(req.params.id);
  res.send('Deleted')
 } 

 module.exports.findProduct = async (req, res) => {
  const productId = req.params.id;
  const product = await productService.findProduct(productId);
  res.send(product)
 } 

 module.exports.updateOne = async (req, res) => {
  const product = await productService.updateOne(req.params.id, req.body);
  res.send(product)
 } 