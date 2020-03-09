const path = require('path');
const http = require('http');
const express = require('express');
const app = express();

const adminRouters = require('./routes/admin.js');
const firstpage = require('./routes/shop.js');
const bodyparser = require('body-parser');

app.use(bodyparser.urlencoded({extended:false}));

//console.log('the server is running');

app.use(adminRouters);
app.use(firstpage);

app.use((req,res,nex)=>{
    // res.sendFile(path.join(__dirname,'../','views','shop.html'));
    res.status(404).sendFile(path.join(__dirname,'views','404.html'));
});

const server = http.createServer(app);

server.listen(3000);