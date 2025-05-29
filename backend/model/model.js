let mongoose = require('mongoose');
  mongoose.connect('mongodb://127.0.0.1:27017/products')
console.log('Connected to MongoDB');
let productSchema = new mongoose.Schema({
    id:Number,
    title: String,
    description: String,
    price: Number,
    quntity: Number,
    image: String,
    category: String,
    cdate: {
        type: Date,
        default: Date.now
    }
})
let Product = mongoose.model('Product', productSchema);
module.exports = Product;