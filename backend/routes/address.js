let express = require('express')
const address = require('../model/address')

let router = express.Router()
router.get('/',async(req,res)=>{
   try {
     let data = await address.find()
    return res.json({success:true,message:"add address", data})
    
   } catch (error) {
    return res.json({success:false,message:error.message})
    
   }

})
router.get('/:id',async(req,res)=>{
   try {
    let id = req.params.id
     let data = await address.findOne({id})
    return res.json({success:true,message:"perticular address", data})
    
   } catch (error) {
    return res.json({success:false,message:error.message})
    
   }

})
router.delete('/:id',async(req,res)=>{
   try {
    let id = req.params.id
     let data = await address.deleteOne({id})
    return res.json({success:true,message:"delete address", data})
    
   } catch (error) {
    return res.json({success:false,message:error.message})
    
   }

})
router.patch('/:id',async(req,res)=>{
   try {
    let id = req.params.id
    let body = req.body
     let data = await address.updateOne({id:(+id)},{$set:body})
    return res.json({success:true,message:"Update address", data})
    
   } catch (error) {
    return res.json({success:false,message:error.message})
    
   }

})
router.post('/',async(req,res)=>{
   try {
    let body = req.body
     let data = await address.insertOne(body)
     data.save()
    return res.json({success:true, message:"data saved"})
    
   } catch (error) {
    return res.json({success:false,message:error.message})
    
   }

})
module.exports = router