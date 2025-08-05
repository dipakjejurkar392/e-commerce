const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const ProductSchema = new mongoose.Schema({
    productId: {
        type: Number,
        
    },
    title: String,
    price: Number,
    category: String,
    description: String,
    image: String,
    quantity: Number,
});

// Auto-increment for productId instead of generic 'id'
ProductSchema.plugin(AutoIncrement, { inc_field: 'productId' });

const Product = mongoose.model('Products', ProductSchema);
module.exports = Product;
