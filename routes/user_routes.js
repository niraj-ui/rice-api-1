const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const User = require('../models/user')
const Contact = require('../models/contact')
const TrackOrder = require('../models/track-order')
const AddBill = require('../models/add-bill')
const krblEnuiry = require('../models/krbl-enquiry')
const krblOrder = require('../models/krbl-order')
//API to Signup User
router.post('/apply', (req, res)=>{
    //check if user exits later

//hash password
let newUser = new User({
    name:req.body.name,
    email:req.body.email,
    mobile: req.body.mobile,
    amountReq: req.body.amountReq,
    reqFor: req.body.reqFor,
})
//save User
newUser.save((err,user) => {
    // user.hash = undefined;
    if(err && !user){
        res.status(401).json({ message:err });
    }
   else{ res.status(200).json({ status: 'SUCCESS', data: user })}
})
})

//API to get all users
router.get('/all', (req, res)=>{
    User.find({}, (err, user)=>{
        if(err && !user){
            res.status(401).json({ message:err });
        }
       else{ res.status(200).json({ status: 'SUCCESS', data: user })}
    })
})

router.get('/allcontact', (req, res) => {
    Contact.find({}, (err, user)=>{
        if(err && !user){
            res.status(401).json({ message:err });
        }
       else{ res.status(200).json({ status: 'SUCCESS', data: user })}
    })
})


//API to get user by ID
router.get('/:id', (req, res) => {
    User.findOne({
        mobile: req.params.id
    }, (err, user)=>{
        if(err && !user){
            res.status(401).json({ message:err });
        }
       else{ res.status(200).json({ status: 'SUCCESS', data: user })}
    })
})

//API to delete single user
router.delete('/:id', (req,res)=>{
    User.findByIdAndDelete(req.params.id, (err, result)=>{
        if(err && !user){
            res.status(401).json({ message:err });
        }
       else{ res.status(200).json({ status: 'SUCCESS', data: user })}
    })
})

//API to Update User 
router.put('/:id', (req,res)=>{
    let updateUser = req.body;
    User.findByIdAndUpdate(req.params.id, updateUser, {new:true},(err, user)=>{
        if(err){console.log(err)}
        else{
            res.send(user)
        }
    })
})



router.post('/contact', (req, res)=>{
    //check if user exits later

//hash password
let newUserC = new Contact({
    name:req.body.name,
    email: req.body.email,
    subject: req.body.subject,
    message: req.body.message
})
//save User
newUserC.save((err,user) => {
    // user.hash = undefined;
    if(err && !user){
        res.status(401).json({ message:err });
    }
   else{ res.status(200).json({ status: 'SUCCESS', data: user })}
})
})

//API to get all users




router.post('/track-order', (req, res)=>{
    //check if user exits later
//console.log(req.body)
  
let newtrackC = new TrackOrder({
    mobile:req.body.mobile,
    // ordered:[{ status: req.body.ordered.status, date:req.body.ordered.date}], 
    // packed: [{ status: req.body.status, date:req.body.date}], 
    // shipped: [{ status: req.body.status, date:req.body.date}], 
    // cancelled: [{ status: req.body.cancelled.status, date:req.body.cancelled.date}], 
    // ordered:req.body.ordered,
    // packed:req.body.packed,
    // shipped: req.body.shipped,
    // cancelled: req.body.cancelled,

    ordered_date: req.body.ordered_date,
    ordered_text: req.body.ordered_text,
    ordered_status: req.body.ordered_status,

    packed_date: req.body.packed_date,
    paccked_text: req.body.paccked_text,
    packed_status: req.body.packed_status,

    shipped_date: req.body.shipped_date,
    shipped_text: req.body.shipped_text,
    shipped_status: req.body.shipped_status,

    cancelled_date: req.body.cancelled_date,
    cancelled_text: req.body.cancelled_text,
    cancelled_status: req.body.cancelled_status,

    user_name: req.body.user_name,
    track_id: req.body.track_id,
    user_adress: req.body.user_adress,
    currier_name: req.body.currier_name,
    dilvery_date: req.body.dilvery_date,
    
    prod_status: req.body.prod_status,
  
})
//save User
newtrackC.save((err,user) => {
    // user.hash = undefined;
    if(err && !user){
        res.status(401).json({ message:err });
    }
   else{ res.status(200).json({ status: 'SUCCESS', data: user })}
})
}) // end

router.get('/track-order/all', (req, res) => {
    TrackOrder.find({}, (err, user)=>{
        if(err && !user){
            res.status(401).json({ message:err });
        }
       else{ res.status(200).json({ status: 'SUCCESS', data: user })}
    })
}) // end 
//API to get all users
//API to get user by ID
router.get('/track-order/:id', (req, res) => {
   // console.log(req.body)
    TrackOrder.findOne({
        track_id: req.params.id
    }, (err, user)=>{
        if(err && !user){
            res.status(401).json({ message:err });
        }
       else{ res.status(200).json({ status: 'SUCCESS', data: user })}
    })
})// end single find by

//  -------------------------   //

router.post('/add-bill', (req, res)=>{
    //check if user exits later
//console.log(req.body)
  
let newbill = new AddBill(req.body)
//save User
newbill.save((err,user) => {
    // user.hash = undefined;
    if(err && !user){
        res.status(401).json({ message:err });
    }
   else{ res.status(200).json({ status: 'SUCCESS', data: user })}
})
}) // end

router.get('/add-bill/all', (req, res) => {
    AddBill.find({}, (err, user)=>{
        if(err && !user){
            res.status(401).json({ message:err });
        }
       else{ res.status(200).json({ status: 'SUCCESS', data: user })}
    })
}) // end 
//API to get user by ID
router.get('/add-bill/:id', (req, res) => {
    // console.log(req.body)
     AddBill.findOne({
        mobile_no: req.params.id
     }, (err, user)=>{
         if(err && !user){
             res.status(401).json({ message:err });
         }
        else{ res.status(200).json({ status: 'SUCCESS', data: user })}
     })
 })// end single find by

//API to delete single user
// router.delete('/add-bill/delete', (req,res)=>{
//     AddBill.findOneAndDelete({mobile:req.params.mobile}, (err, result)=>{
//         if(err && !user){
//             res.status(401).json({ message:err });
//         }
//        else{ res.status(200).json({ status: 'SUCCESS', data: user })}
//     })
// })

//API to Update User 
router.put('/add-bill/:id', (req,res)=>{
    let updateUser = req.body;
    AddBill.findByIdAndUpdate(req.params.id, updateUser, {new:true},(err, user)=>{
        if(err){console.log(err)}
        else{
            res.send(user)
        }
    })
})
// ------------------   -----------     mail send --------------    //
 

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'nirajbca2011@gmail.com',
      pass: 'Sonu@1703'
    }
  });
  
  var mailOptions = {
    from: 'nirajbca2011@gmail.com',
    to: 'nirajbca2011@gmail.com',
    subject: 'Sending Email using Node.js',
    text: `Hi Smartherd, thank you for your nice Node.js tutorials.
            I will donate 50$ for this course. Please send me payment options.`
    // html: '<h1>Hi Smartherd</h1><p>Your Messsage</p>'        
  };
  

// krbl start here -----------------------------------------------------------------

router.post('/krbl-enquiry', (req, res)=>{
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
let newtrackC = new krblEnuiry({
    mobile:req.body.mobile,

    name: req.body.name,
    email: req.body.email,
    area: req.body.area,

    brands: req.body.brands,
    invest: req.body.invest,
    town: req.body.town,
    status: req.body.status,
    state: req.body.state,
    district: req.body.district,
    pincode: req.body.pincode,

    message: req.body.message,
})
//save User
newtrackC.save((err,user) => {
    // user.hash = undefined;
    if(err && !user){
        res.status(401).json({ message:err });
    }
   else{ res.status(200).json({ status: 'SUCCESS', data: user })}
})
}) // end

router.get('/krbl-enquiry/all', (req, res) => {
    krblEnuiry.find({}, (err, user)=>{
        if(err && !user){
            res.status(401).json({ message:err });
        }
       else{ res.status(200).json({ status: 'SUCCESS', data: user })}
    })
}) // end 
//API to get user by ID
router.get('/krbl-enquiry/:id', (req, res) => {
    // console.log(req.body)
    krblEnuiry.findOne({
        mobile: req.params.id
     }, (err, user)=>{
         if(err && !user){
             res.status(401).json({ message:err });
         }
        else{ res.status(200).json({ status: 'SUCCESS', data: user })}
     })
 })// end single find by
//API to Update User 
router.put('/krbl-enquiry/:id', (req,res)=>{
    let updateUser = req.body;
    krblEnuiry.findByIdAndUpdate(req.params.id, updateUser, {new:true},(err, user)=>{
        if(err){console.log(err)}
        else{
            res.send(user)
        }
    })
})

/*----------- krbl order --         -----------------  krbl order   ----------- ---------   ------  */
router.post('/krbl-order', (req, res)=>{
    let orderbill = new krblOrder(req.body)    //save User
    orderbill.save((err,user) => {        // user.hash = undefined;
        if(err && !user){
            res.status(401).json({ message:err });
        }
    else{ res.status(200).json({ status: 'SUCCESS', data: user })}
    })
}) // end

// all 
router.get('/krbl-order/all', (req, res) => {
    krblOrder.find({}, (err, user)=>{
        if(err && !user){
            res.status(401).json({ message:err });
        }
       else{ res.status(200).json({ status: 'SUCCESS', data: user })}
    })
}) // end 
//API to get user by ID
router.get('/krbl-order/:id', (req, res) => {
    // console.log(req.body)
    krblOrder.findOne({
        mobile: req.params.id
     }, (err, user)=>{
         if(err && !user){
             res.status(401).json({ message:err });
         }
        else{ res.status(200).json({ status: 'SUCCESS', data: user })}
     })
 })// end single find by


// krbl start here -----------------------------------------------------------------
module.exports = router
