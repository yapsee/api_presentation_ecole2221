const Product = require('./products.schema');
const mongoose = require('mongoose');

module.exports.listAllProduct = async () => {
  const products = await Product.find();
  return products
 } 

 module.exports.addProduct = async (productData) => {
   const product = await Product.create(productData);
   return product
 } 

 module.exports.deleteProduct = async (productId) => {
   await Product.findOneAndDelete({_id:  productId});
  return 'Deleted'
 } 

 module.exports.findProduct = async (productId) => {
  const valid = mongoose.Types.ObjectId.isValid(productId);
  if(valid){
  const product = await Product.findOne({_id: productId});
  return product
  }
  else{
   return 'Please check your product Id'
  }
 } 

 module.exports.updateOne = async (productId, productData) => {
  console.log(productId, productData)
  const valid = mongoose.Types.ObjectId.isValid(productId);
  if(valid){
  const product = await Product.findOneAndUpdate({_id: productId}, productData, {new: true});
  return product
  }
  else{
   return 'Please check your product Id'
  }
 } 