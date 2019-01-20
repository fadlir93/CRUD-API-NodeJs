const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//define the schema
let ProductSchema = new Schema({
    name: {type: String, required: true, max: 100},
    price: {type: Number, required: true},
});

//export the model
module.exports = mongoose.model('Product', ProductSchema);