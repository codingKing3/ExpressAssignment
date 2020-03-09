const path = require('path');
const express = require('express');
const frontPage = express.Router();

// my own created imports
const rootDir = require('../util/path');

frontPage.get('/',(req,res,next)=>{
    console.log('main');   
    res.sendFile(path.join(rootDir,'views','shop.html')); 
   
   });

module.exports=frontPage;