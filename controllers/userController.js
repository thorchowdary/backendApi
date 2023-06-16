const asyncHandler = require("express-async-handler");
const User = require("../models/userModel")
const bcrypt = require("bcrypt");
const { json } = require("express");
  
//@desc Registot the user
//@route POST /api/users/register
//@access public
const registerUser = asyncHandler(async(req,res)=>{
    const {userName,email,password} = req.body;
    if(!userName || !email || !password){
        res.status(400);
        throw new Error("All fields are manadatory!");
    }
    //hash passworfd
    const hashPassword = await bcrypt.hash(password,10);
    //console.log(hashPassword);
    const userAvailable = await User.findOne({email});
    if(userAvailable){
        res.status(400);
        throw new Error("User already exists!");
    }
    const user = User.create({
        userName,
        email,
        password:hashPassword
    });

    if(user){
        res.status(201).json({_id: userName, email: email});
    }
    else{
        res.json(400);
        throw new Error("User data is not valid!"); 
    }
})

//@desc Registot the user
//@route POST /api/users/login
//@access public
const loginUser = asyncHandler(async(req,res)=>{
    const {email,password} = req.body;
    if(!email || !password){
        res.send(400);
        throw new Error("All fields are required");
    }
    else{
        const checkemail = await User.findOne({email});
        //const password = await User.
        if(checkemail && await bcrypt.compare(password,checkemail.password)){
            res.status(200).json({message:`login ${email} successfull`});
        }
        else{
            res.status(400);
            throw new Error("Please register and try loging in!");
        }

    }
})

//@desc Registot the user
//@route GET /api/users/current
//@access public
const currentUser = asyncHandler(async(req,res)=>{
    res.json({message:"Current user information"})
})

module.exports = {registerUser,loginUser,currentUser};