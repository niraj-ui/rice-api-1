const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name:{type:String, trim:true},
    email:{type:String, trim:true, lowercase:true},
    mobile: { type: Number, trim: true, required: true},
    amountReq: { type: String, required: true },
    reqFor:{type:String, required:true},
    created:{type:Date, default:Date.now}
})


module.exports = mongoose.model('User', userSchema)