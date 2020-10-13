const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const krblEnquirySchema = new Schema({
    mobile:{type:String},

    name: {type:String},
    email: {type:String},
    area: {type:String},  

    brands: {type:String},
    invest: {type:String},
    town: {type:String},
    state: {type:String},
    district: {type:String},

    pincode: {type:String},
    message: {type:String},
    status: {type:String},
    created:{type:Date, default:Date.now}
})


module.exports = mongoose.model('krblEnuiry', krblEnquirySchema)
