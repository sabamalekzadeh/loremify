const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var ImageSchema = new Schema({
    hash : {
        type : String,
        unique : true
    }
});

module.exports = mongoose.model('Image', ImageSchema);