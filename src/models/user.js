const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    fastName :{
        type: String
    },
    lastName:{
        type: String
    },
    emailId:{
        type:String
    },
    password:{
        type:String
    },
    age:{
        type: Number
    },
    gender:{
        type:String
    },
});

module.exports = mongoose.model("User", userSchema);