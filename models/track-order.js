const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const trackOrderSchema = new Schema({
    mobile:{type:String},
   // email:{type:String, trim:true, lowercase:true},
    // ordered:  {type:String},
    // packed:  {type:String},
    // shipped:  {type:String},
    // cancelled: {type:String},
    ordered_date: {type:String},
    ordered_text: {type:String},
    ordered_status: {type:Boolean},

    packed_date: {type:String},
    paccked_text: {type:String},
    packed_status: {type:Boolean},

    shipped_date: {type:String},
    shipped_text: {type:String},
    shipped_status:{type:Boolean},

    cancelled_date: {type:String},
    cancelled_text: {type:String},
    cancelled_status: {type:Boolean},


    created:{type:Date, default:Date.now}
})


module.exports = mongoose.model('TrackOrder', trackOrderSchema)