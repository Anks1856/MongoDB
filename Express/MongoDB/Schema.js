const mongoose = require('mongoose');

const LoginSchema = mongoose.Schema({

    name : String,
    password : String

});

module.exports = {LoginSchema};


