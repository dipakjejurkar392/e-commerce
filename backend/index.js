// require('./dbconnect.js')
let productsRoutes = require('./routes/products.js')
let UserRoutes = require('./routes/user.js')
let addressSchema = require('./routes/address.js')
let cartSchema = require('./routes/cart.js')

let cors = require('cors')


let express = require('express');

let app = express();
app.use(cors())
app.use(express.json());
app.use('/',productsRoutes)
app.use('/user',UserRoutes)
app.use('/address',addressSchema)
app.use('/cart',cartSchema)





app.listen(3000, () => {
  console.log('Server is running');
});