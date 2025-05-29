let mongoose = require('mongoose');
  mongoose.connect('mongodb://127.0.0.1:27017/products')
  const AutoIncrement = require('mongoose-sequence')(mongoose);
console.log('Connected to MongoDB');
let UserSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String
})
UserSchema.plugin(AutoIncrement, { inc_field: 'id' });
let User = mongoose.model('Users', UserSchema);
module.exports = User;