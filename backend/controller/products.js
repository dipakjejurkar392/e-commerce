let products = require('../model/model.js');
let allproducts =  async(req,res)=>{
    let data = await products.find();
    res.send(data)  
}
let productById = async(req,res)=>{
  let id = req.params.id
    let data = await products.find({id});
    res.send(data)  
}
let addProduct = async(req,res)=>{
    let body = req.body
    let product = new products(body);
    await product.save();
    res.send(product);

}
let deleteProduct = async(req,res)=>{
    let id = +req.params.id;
    let product = await products.deleteOne({id});
   
    res.send(product);
}
let editproduct = async(req,res)=>{
    let id = +req.params.id;
    let body = req.body;
    let product = await products.updateOne({id:id},{$set:body});
    res.send(product);

}
module.exports={
    allproducts,
    productById,
    addProduct,
    deleteProduct,
    editproduct
}