const mongoose = require("mongoose");
const cotactSchema = mongoose.Schema({
    name:{
        type:String,
        required:  [true, "Please add the contact Name"],
    },
    email:{
        type:String,
        required :[true, "Please add the contact email Name"], 
    },
    phone:{
        type:String,
        required :[true, "Please add the contact phone Name"], 
    },
},{
    timestamps: true,
});

module.exports = mongoose.model("Contact",cotactSchema);