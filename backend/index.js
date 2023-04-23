const express = require("express");
const cors = require("cors");
import bodyparser from 'body-parser';
import mongoose from 'mongoose';


const app = express();
app.use(bodyparser.json({limit:"30mb",extended:true}));
app.use(bodyparser.urlencoded({limit:"30mb",extended:true}));
app.use(express.json());
app.use(cors());


app.listen(3001);