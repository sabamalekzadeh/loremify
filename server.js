const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.connect('mongodb://malekzadeh:admin123@ds149894.mlab.com:49894/loremify');
require('./model/imageModel');

const app = express(); // copy of server 

const routes = require('./routes');

app.set('view engine', 'ejs');


app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.use(express.static(path.join(__dirname ,'./static')));

app.use(cors());

routes(app);

const PORT = process.env.PORT || 8000;
app.listen(PORT,() => {
    console.log(`Listining to PORT : ${PORT}`);
});