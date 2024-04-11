const mongoose = require('mongoose');

const NoteSchema = new mongoose.Schema({
    Title: {
        type: String,
        required: true
    },
    Description: {
        type: String,
        required: true,
        unique:true
    },
    tag: {
        type: String,
        default: "General"
    },
    Date: {
        type: Date,
        default: Date.now
    }
    

});

module.exports = mongoose.model('Notes',NoteSchema);