const mongoose= require("mongoose");

const Contact = mongoose.Schema({
    email:String,
    contact:String,
    comments:String
    
})

module.exports= mongoose.model('contact',Contact)