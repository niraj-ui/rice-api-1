const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const contactSchema = new Schema({
    name:{type:String},
    email:{type:String, trim:true, lowercase:true},
    subject: { type: String },
    message: { type: String},
    created:{type:Date, default:Date.now}
})


module.exports = mongoose.model('Contact', contactSchema)