const path = require('path');
const express = require('express');
const router = express.Router();

// my own created imports
const rootDir = require('../util/path');

// replace app with router
router.get('/add-product',(req,res,next)=>{
    console.log('adding product') ;  
    
    res.sendFile(path.join(rootDir,'views','add-product.html'));
   //next(); // allow to move on
   });
   // using app.post will only filter for post request 
   router.post('/product',(req,res,next)=>{
       console.log(req.body);  
   // res.send('<h1>This is the Home page</h1>');
       res.redirect('/');   

   });

   module.exports = router;