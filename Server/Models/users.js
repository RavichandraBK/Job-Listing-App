const mong = require('mongoose');

const User = mong.model('User',{
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    mobile:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        rquired:true,
    },
})

module.exports = User;