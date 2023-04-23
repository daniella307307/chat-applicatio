const express=require('express');
const getPost= async(req,res)=>{
    try {
       const  postMessage= await PostMessage.find();
       res.status(200).json(postMessage);
    } catch (error) {
      res.status(404);  
    }
    }
module.exports={ getPost }