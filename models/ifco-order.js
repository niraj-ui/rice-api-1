const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    item_name:{type:String},
    item_weight:{type:String},
    item_qun:{type:String},
    item_amount:{type:String},
    item_rate:{type:String},   
})
const ifcoOrderSchema = new Schema({
   
    name:{type:String},
    email:{type:String},
    mobile:{type:String},
    address:{type:String},
    city:{type:String},
    postcode:{type:String},
    message:{type:String},
   
    order_id: {type:String},
    total_amount: {type:String},
    item_paid: {type:Boolean},
    product: [productSchema],

    created:{type:Date, default:Date.now}
})


module.exports = mongoose.model('ifcoOrder', ifcoOrderSchema)
