const connecttomongo = require('./db');
const express = require('express');
connecttomongo();
const port = 3000; 
const app = express();
app.get('/',(req,res)=>{
    res.send('hello guys');
})
app.listen(port,()=>{
    console.log(`app listening on ${port}`);
})
