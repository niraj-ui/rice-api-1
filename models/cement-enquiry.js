const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const CementEnquerySchema = new Schema({
   
    name:{type:String},
    email:{type:String},
    mobile:{type:String},
    address:{type:String},
    city:{type:String},
    postcode:{type:String},
    message:{type:String},

    created:{type:Date, default:Date.now}
})


module.exports = mongoose.model('CementEnquery', CementEnquerySchema)
