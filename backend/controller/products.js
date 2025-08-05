let products = require('../model/model.js');
const mongoose = require('mongoose');
let allproducts =  async(req,res)=>{
    let data = await products.find();
    res.send(data)  
}
let productById = async (req, res) => {
  try {
    const productId = req.params.id;
    const data = await products.findById(productId);
    if (!data) return res.status(404).send('Product not found');
    res.send(data);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};
let addProduct = async(req,res)=>{
    let body = req.body
    let product = new products(body);
    await product.save();
    res.send(product);

}
let deleteProduct = async(req,res)=>{
    let productId = +req.params.id
    let product = await products.deleteOne({productId});
   
    res.send(product);
}
let editproduct = async(req,res)=>{
    let id = +req.params.id;
    let body = req.body;
    let product = await products.updateOne({productId:(+id)},{$set:body});
    res.send(product);

}
module.exports={
    allproducts,
    productById,
    addProduct,
    deleteProduct,
    editproduct
}