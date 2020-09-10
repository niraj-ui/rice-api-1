const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const cors = require('cors')
// const errorHandler = require('./server/middlewares/errorHandler')
const path = require('path')
const logger = require('morgan');

const port = process.env.PORT || 4000
const ads = [
  {title: 'Hello, world (again)!'}
];

// app.use(express.static(__dirname + '/dist/Queriez'));

// app.use(cors())
app.use(logger('dev'));

// var uristring = process.env.MONGODB_URI ||'mongodb+srv://myDoc:myDoc@##123@cluster0-qb2rt.mongodb.net/test?retryWrites=true&w=majority'
// var uristring = 'mongodb+srv://myDoc:myDoc123@cluster0-qb2rt.mongodb.net/test?retryWrites=true&w=majority'
var uristring = process.env.MONGODB_URI || 'mongodb+srv://niraj:Nie6dY97Hv0xD2Ul@cluster0.im67c.mongodb.net/rice?retryWrites=true&w=majority'

mongoose.connect(uristring, { useUnifiedTopology: true });
var db = mongoose.connection;

db.on('error', (err) => {
  console.error(`Mongoose connection error: ${err}`);
  process.exit(1);
});
db.once('open', function() {
  console.log('database connected')
});



app.use(cors());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use('/', require(path.join(__dirname, 'routes')));

//Authenticate Route
// app.use(jwtVerify)

// api routes
require('./routes/routes')(app);



//global error handlers
// app.use(errorHandler)
app.listen(port, () => console.log(`Example app at ${port}`))

