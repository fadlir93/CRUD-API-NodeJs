const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
let dev_db_url = 'mongodb://userapi:123abc@ds161134.mlab.com:61134/createapi';
let mongoDB = process.env.MONGODB_URI || dev_db_url;

mongoose.connect(mongoDB,{ useNewUrlParser: true });
mongoose.Promise = global.Promise;

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error: '));

const product = require('./routes/product.route'); // import routes for the product
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))
app.use('/products', product)


let port = 1234;

app.listen(port, () => {
    console.log('Server is up and running on port number' + port);
});