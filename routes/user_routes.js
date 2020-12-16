const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const User = require('../models/user')
const Contact = require('../models/contact')
const TrackOrder = require('../models/track-order')
const AddBill = require('../models/add-bill')
const krblEnuiry = require('../models/krbl-enquiry')
const krblOrder = require('../models/krbl-order')
const ifcoEnuiry = require('../models/ifco-enquiry')
const ifcoOrder = require('../models/ifco-order')

var smtpTransport = require('nodemailer-smtp-transport');
const xoauth2 = require('xoauth2');
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
  

// krbl start here -----------------------------------------------------------------

router.post('/krbl-enquiry', (req, res)=>{
     

var mailOptions = {
    from: 'ashok22039@gmail.com',
    to: 'ashok22039@gmail.com',
    subject: "KRBL Enqiry From "+req.body.name ,
    // text:  'Mobile:'+req.body.mobile+' Name":'+ req.body.name+' Email : '+ req.body.email + 'Area:' +req.body.area+ 'Brands:'+ req.body.brands + 'invest:'+ req.body.invest +'Town:'+ req.body.town + 'State:'+ req.body.state + 'District:'+ req.body.district +' Pincode:'+ req.body.pincode + 'Status:'+ req.body.status+ 'Message:'+ req.body.message+'',
    html:   'Mobile:'+req.body.mobile+'<br /> Name:'+ req.body.name+'<br /> Email : '+ req.body.email + '<br /> Area:' +req.body.area+ '<br /> Brands:'+ req.body.brands + '<br /> invest:'+ req.body.invest +'<br /> Town:'+ req.body.town + '<br /> State:'+ req.body.state + '<br /> District:'+ req.body.district +'<br /> Pincode:'+ req.body.pincode + '<br /> Status:'+ req.body.status+ '<br /> Message:'+ req.body.message+''        
  };

var transport = nodemailer.createTransport(smtpTransport({  
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {

        xoauth2: xoauth2.createXOAuth2Generator({
            type: 'OAuth2',
            user: "emailnirajkr@gmail.com",
            serviceClient: '113600000000000000000',
            privateKey: '-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCkiz0Oho2wHHKg\nA+/W22L3kTBd3PQ3MpDAVGIppHcM7wMNf8DXGyYa8uCJgMVkh382uupCvNntQOlr\nGMDS/iHezikLdErIdjR36Oo8FyWJsGmyb7jdnlzrr80VTAGXaH/UwmdxZX9IB172\ncNu8lq6rsqtXryx8qJF53qa5qrmonFpQOoKKZE8FDInpj+9R2zerMjNehtI8fubx\n6ZDuLxrnOWY2NzCwubxdrrwx+gyOud10HDZjaQg15cJ7alErb0zoVZIOQtbmHkbC\nfD7zGY17zpiOfiV0fqIz2iPY99GmbXibTn3RudyEBWPQjnNz677oEptFps964bZZ\nMTHqqPCzAgMBAAECggEAGzEWGPrBcCjIrzWXWAwPUdbrhZzIZarJ4w7O3g+GIQa1\nRsYlnyanExhaD5R5NRYd6XSALCE7aQrWHX23YpGJarbqb4XQqfS8J6i/tMh6dUOd\nuVWJ2Q3yUHylSUSzP/Xj/MwCU5SwsRLkGEPUUa5xFSzEm2FL2m9HreUj66uRXOdI\nOS3QlxHdkDew+hkgWjVVZcyWj0bhY7Yj3hN32vzQ7jYCxdhyU2Sj+3vCEr8vmlDM\nTku5Ddm/5qoG6oyfo2/50J2C9kh0QZMbnq0nMmhKs4n/OR7VpRxH21lN/X/9N51i\n0ooKwAXtwuoqOhtpJsRzLyfNw5CI3+D/5SUW3mpIcQKBgQDjpNgJjKl/IK3gWhn8\nz2SZ1kajgaK9L25Vpbj4/f/hJAfbauI7jgvUTjGEM7Q8WTFsv/1xfl7Y347vT8gC\npd/0kAGWzJT76eeECwgFlLUOBoYn4bkVPo7Rg/7NnqfBTA0cE1LAGoWbnmA2r0PI\nnYXuOMRN9PFXF7TJGaaAMb5kGQKBgQC5Cj+IxJBePezwSciKi3f9Km6zgNQ2tlvA\nhxoRmr5L3jZdU8z30XJQ2YP5RYJrRBOB7NNPf4u5KBs0qysPVnW7ZyYYfi5Jr5rK\nBIxsf62Y/5GCOgx0HHUfXln8RM7miEAD6KW93yags+n/NkpIdGwuwT8zHc2DyVzS\nQEBSsj80qwKBgGJs87utRdvhlUxbqMDWKvkY3JH1ixehWmNNtBx0Nh5yJbOJEygM\n0rCI3n/6mwM8zVHn8P0RVpEOmA6AwEnkzmA/o3BAJGqHR8KfwmgnU+EskPTNc+jr\nk3SjTZg58O5yo3hwImdNEFeospDyVqx272GAyd+q+G5foZsRrBvhZiCBAoGASDiK\nwavOmSncT5DMt95lj6c/G8p9iXk1aHiSoSpfeacaWuS5TEQwNQQgsWsC0zD32C8B\n7rZeZ38S10SzgsIBI4rH4KlnEZV7ebu6vyI6NEwTk9tqPutYf0zJHGASzQGC0sO7\n5Nay8egmvViIN61RCBKewymvq+8szlcLg/tUFg8CgYAUi7+x9+TsxYa+DUIx0MB4\njR4TtQUcEcQBqyxsHDVvDz7xX14bQ6NBni88CYQ5mp8BH3dTcm831eorK8yDMUWN\nD2MJjETP51nJaq3yB9E2rzUPr5UG9mlxz6CdVwCr5jUfaGXpqNSNyg/sMxWlAQpd\ngReXjoZgmAbHf8vjxIoaNQ==\n-----END PRIVATE KEY-----\n',
            accessToken: 'ya29.A0AfH6SMBhbwCcNQ4ImX0DZZAzES2fh2t_KC-pLWo6UWPcGVROVk58_JvxfsY6FIth0QiCwpFdG337iRjG77UVPAAxya1L9QpFJVluYjPQ8egqI0px3cfbC0iSiH0kQSfC-8iAEaOlfbf7rf6iDP-oc6m1GNwE3-ffEJ25KvdWX7E',
            expires: 1484314697598
         })
        
    },
     tls:{
        rejectUnauthorized: false
    }
}));

    
    transport.sendMail(mailOptions, function(error, info){
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


// IFCO ----- start here -----------------------------------------------------------------

router.post('/ifco-enquiry', (req, res)=>{
     
 
let newtrackC = new ifcoEnuiry({
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

router.get('/ifco-enquiry/all', (req, res) => {
    ifcoEnuiry.find({}, (err, user)=>{
        if(err && !user){
            res.status(401).json({ message:err });
        }
       else{ res.status(200).json({ status: 'SUCCESS', data: user })}
    })
}) // end 
//API to get user by ID
router.get('/ifco-enquiry/:id', (req, res) => {
    // console.log(req.body)
    ifcoEnuiry.findOne({
        mobile: req.params.id
     }, (err, user)=>{
         if(err && !user){
             res.status(401).json({ message:err });
         }
        else{ res.status(200).json({ status: 'SUCCESS', data: user })}
     })
 })// end single find by
//API to Update User 
router.put('/ifco-enquiry/:id', (req,res)=>{
    let updateUser = req.body;
    ifcoEnuiry.findByIdAndUpdate(req.params.id, updateUser, {new:true},(err, user)=>{
        if(err){console.log(err)}
        else{
            res.send(user)
        }
    })
})

/*----------- IFCO order --         -----------------  IFCO order   ----------- ---------   ------  */
router.post('/ifco-order', (req, res)=>{
    let orderbill = new ifcoOrder(req.body)    //save User
    orderbill.save((err,user) => {        // user.hash = undefined;
        if(err && !user){
            res.status(401).json({ message:err });
        }
    else{ res.status(200).json({ status: 'SUCCESS', data: user })}
    })
}) // end

// all 
router.get('/ifco-order/all', (req, res) => {
    ifcoOrder.find({}, (err, user)=>{
        if(err && !user){
            res.status(401).json({ message:err });
        }
       else{ res.status(200).json({ status: 'SUCCESS', data: user })}
    })
}) // end 
//API to get user by ID
router.get('/ifco-order/:id', (req, res) => {
    // console.log(req.body)
    ifcoOrder.findOne({
        mobile: req.params.id
     }, (err, user)=>{
         if(err && !user){
             res.status(401).json({ message:err });
         }
        else{ res.status(200).json({ status: 'SUCCESS', data: user })}
     })
 })// end single find by

router.put('/ifco-order/:id', (req,res)=>{
//     console.log(id);
    let updateUser = req.body;
//     console.log(updateUser);
//     console.log(req.params.id);
//     return;
    ifcoOrder.findByIdAndUpdate(req.params.id, updateUser, {new:true},(err, user)=>{
        if(err){console.log(err)}
        else{
            res.send(user);
//             console.log(user);
        }
    })
})
// krbl start here -----------------------------------------------------------------
module.exports = router
