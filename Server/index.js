// const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const mong = require('mongoose');
const auth = require('././Routes/auth');
const jobs = require('././Routes/jobs');
const Cors = require('cors');
dotenv.config();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(Cors());
app.use('/api/auth',auth);
app.use('/api/jobs',jobs);

app.use((err,req,res,next)=>{
    console.error(err.stack);
    res.status(500).json({error:'Internal Server error'});
})

app.listen(process.env.PORT,async()=>{
    try{
        await mong.connect(process.env.MongoDB_URL).then(()=>{
            console.log(`DB connected Server is running at http://localhost:${process.env.PORT}`);
        });
    }catch(err){
        console.log(err);
    }
})