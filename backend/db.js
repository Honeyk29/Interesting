const mongoose = require('mongoose');
const mongourl = "mongodb://localhost:27017/iNotebook"

const connecttomongo = ()=>{
    mongoose.connect(mongourl)
}

module.exports = connecttomongo;
