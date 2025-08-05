let express = require('express')
const address = require('../model/address')
const { allAddress, perticularAddress, deleteAddress, updateAddress, addAddress } = require('../controller/address')

let router = express.Router()
router.get('/',allAddress)
router.get('/:id',perticularAddress)
router.delete('/:id',deleteAddress)
router.patch('/:id',updateAddress)
router.post('/',addAddress)
module.exports = router