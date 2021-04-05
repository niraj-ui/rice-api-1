const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const CementEnquerySchema = new Schema({
   
    name:{type:String},
    f_name:{type:String},
    email:{type:String},
    mobile:{type:String},

    area :{type:String},
    invest :{type:String},
    disctrict:{type:String},
    state :{type:String},
    town :{type:String},

    postcode:{type:String},
    message:{type:String},

    created:{type:Date, default:Date.now}
})


module.exports = mongoose.model('CementEnquery', CementEnquerySchema)
