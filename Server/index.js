// const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();

app.use(bodyParser.urlencoded({extended:true}));

app.listen(process.env.PORT,()=>{
    console.log(`Server is running at http://localhost:${process.env.PORT}`);
})