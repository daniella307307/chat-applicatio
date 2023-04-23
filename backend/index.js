 const express = require("express");
 const cors = require("cors");
// import bodyparser from 'body-parser';
// import mongoose from 'mongoose';

const bodyparser=require('body-parser');
const mongoose=require('mongoose');
const postroutes=require('./routes/posts')
const app = express();
app.use(bodyparser.json({limit:"30mb",extended:true}));
app.use(bodyparser.urlencoded({limit:"30mb",extended:true}));
app.use(express.json());
app.use(cors());
app.use('/POST',postroutes);
mongoose.connect('mongodb://127.0.0.1:27017/memoris',{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=>console.log("connected to mongodb sucussefully"))
.catch((err)=>console.log('Failed to connect to mongodb '));

app.listen(3001,console.log(`server running on port 3001`));