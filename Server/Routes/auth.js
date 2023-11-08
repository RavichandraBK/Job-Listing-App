const express = require('express');
const router = express.Router();
const jwtToken = require('jsonwebtoken');
const Users = require('../Models/users')
require('dotenv').config();

router.post('/login',async(req,res)=>{
    try{
        const {email, password} = req.body;

    const user = await Users.findOne({email,password});
    if(!user){
        return res.status(401).json({message:'Invalid email id or password'});
    }
    
        const token = jwtToken.sign(user.toJSON(),process.env.Secret_key);
        res.json({message:'Successfully logged in',recruiterName:user.name,email:user.email,token,});
}
    catch(err){
        console.log(err,'Something went wrong, couldnt login');
        res.json({error:'Something went wrong, couldnt login'});
    }

})

router.post('/register',async(req,res)=>{
    try{
        const reqPayload = req.body;
        const {email} = reqPayload;
    const user = await Users.findOne({email});
    if(!user){
        const newUser = await new Users(reqPayload).save();
        const token = jwtToken.sign(newUser.toJSON(),process.env.Secret_key);
        return res.json({message:`${newUser.name} is Successfully registered`,recruiterName:reqPayload.name,token});
    }
    res.json({message:'User already exists, kindly login'});
}catch(err){
    console.log(err,'Something went wrong couldnt register the user');
    res.json({error:'Something went wrong, couldnt register'});
}
})

module.exports = router;