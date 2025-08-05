let mongoose = require('mongoose');
 require('../dbconnect')
  const AutoIncrement = require('mongoose-sequence')(mongoose);

let addressSchema = new mongoose.Schema({

    userId:{
      type: mongoose.Schema.Types.ObjectId,
      require:true,
      ref:"users"
    },
    fullname:String,
    mobile:Number,
    address:String,
    pincode:Number,
    city:String,
    state:String
})
// addressSchema.plugin(AutoIncrement, { inc_field: 'id' });
let address = mongoose.model('address', addressSchema);
module.exports = address;