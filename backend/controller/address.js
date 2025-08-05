
let address = require('../model/address')
let allAddress = async(req,res)=>{
   try {
     let data = await address.find()
    return res.json({success:true,message:"all address", data})
    
   } catch (error) {
    return res.json({success:false,message:error.message})
    
   }

}
let  perticularAddress = async(req,res)=>{
   
   try {
    let id = req.params.id
     let data = await address.findOne({userId : id})
    return res.json({success:true,message:"perticular address", data})
    
   } catch (error) {
    return res.json({success:false,message:error.message})
    
   }

}
let deleteAddress = async(req,res)=>{
   try {
    let id = req.params.id
     let data = await address.deleteOne({userId:id})
    return res.json({success:true,message:"delete address", data})
    
   } catch (error) {
    return res.json({success:false,message:error.message})
    
   }

}
let updateAddress = async(req,res)=>{
   try {
    let id = req.params.id
    let body = req.body
     let data = await address.updateOne({userId:id},{$set:body})
    return res.json({success:true,message:"Update address", data})
    
   } catch (error) {
    return res.json({success:false,message:error.message})
    
   }

}
let addAddress = async(req,res)=>{
   try {
    let body = req.body
     let data = await address.insertOne(body)
     data.save()
    return res.json({success:true, message:"data saved"})
    
   } catch (error) {
    return res.json({success:false,message:error.message})
    
   }

}
module.exports = {
    allAddress,
    perticularAddress,
    deleteAddress,
    updateAddress,
    addAddress
}