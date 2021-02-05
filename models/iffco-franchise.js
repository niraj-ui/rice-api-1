const mongoose = require ('mongoose');
const Schema = mongoose.Schema;
// ObjectId = Schema.ObjectId;

const IffcoFranchiseSchema = new Schema({
    // _id: mongoose.Schema.Types.ObjectId,
    // _id:{type:String},
    name:{type:String},
    s_o_name: {type:String},
    res_address: {type:String},
    mobile: {type:String},  
    alt_mobile: {type:String},
    email_id: {type:String},

    street: {type:String},
    town: {type:String},
    block: {type:String},
    district: {type:String},

    post_office: {type:String},
    pincode: {type:String},
    state: {type:String},

    firm_name: {type:String},
    message: {type:String},
    status: {type:String},

    adhar_card: {type:String},
    pan_card: {type:String},
    bank_passbook: {type:String},

    passport_photo: {type:String},
    qualification_proof: {type:String},
    dob_proof: {type:String},

    show_room: {type:String},
    request_letter: {type:String},
    license_proof: {type:String},

    gst_proof: {type:String},
    itr_proof: {type:String},

    
    created:{type:Date, default:Date.now}
})



module.exports = mongoose.model('IffcoFranchise', IffcoFranchiseSchema)
