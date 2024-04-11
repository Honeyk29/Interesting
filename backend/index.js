const connecttomongo = require('./db');
const express = require('express');
connecttomongo();
const port = 5000; 
const app = express();
app.use(express.json());
app.use('/api/auth',require('./routes/auth'));
// app.use('/api/notes',require('./routes/notes'));
app.get('/',(req,res)=>{
    res.send('hello guys');
})
app.listen(port,()=>{
    console.log(`app listening on ${port}`);
})
