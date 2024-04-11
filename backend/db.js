const mongoose = require('mongoose');
const mongourl = "mongodb://localhost:27017/"

const connecttomongo = ()=>{
    mongoose.connect(mongourl)
}

module.exports = connecttomongo;