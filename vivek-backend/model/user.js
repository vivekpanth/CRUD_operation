const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema =({
    name:{
        type:String
    },
    email:{
        type: String
    },
    address:{
        type: String
    }
})

module.exports = mongoose.model('User', userSchema);