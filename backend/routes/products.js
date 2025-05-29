let express = require('express')

const { allproducts, productById, addProduct, deleteProduct, editproduct } = require('../controller/products.js');
let router = express.Router()

router.get('/products',allproducts)
router.get('/products/:id',productById)
router.post('/products',addProduct)
router.delete('/products/:id',deleteProduct)
router.patch('/products/:id',editproduct)
module.exports = router
