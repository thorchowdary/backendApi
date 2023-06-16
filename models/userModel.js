const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    userName:{
        type:String,
        required:[true,"Please add the user"]
    },
    email:{
        type:String,
        unique: [true,"EmailId already taken"],
        required:[true,"Please add the email"]
    },
    password:{
        type:String,
        required:[true,"Please add the password"]
    }
},
{
    timestamps:true,
}
);

module.exports = mongoose.model("User",userSchema);