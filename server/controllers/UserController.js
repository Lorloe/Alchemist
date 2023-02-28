const express = require('express');
const router = express.Router();
const argon2 = require('argon2');
const jwt = require('jsonwebtoken');
require("dotenv").config();

const User = require('../models/User');

// api/auth/get-user
//Get user by id
const GetUser= async (req,res) => {

    try{
        const user = await User.findOne({_id:req.user.id})     
        if(!user){
            return res.status(404).send("cannot find user")
        }
        const {username, email, password, fullname} = user;
        return res.status(200).send({username, email, fullname});
    }
    catch(err){
        return res.status(400).send("ERROR");
        console.log(err);
    }
};

// api/auth/register
// register user

const Register = async(req, res) => {
    const{ username, password, email, fullname } = req.body;

    //Validation
    if(!username || !password || !email )
        return res.status(400).json({success: false, message: "Missing Username and/or Password"}); 

        try {
            //kiem tra tai khoan ton tai???
            const user = await User.findOne({ username });
            if(user)
                return res.status(400).json({success: false, message: "Username is already exist"});
            
                // hash mat khau = argon2
            const hashedPassword = await argon2.hash(password);
                //tao ra 1 user moi theo mo hinh model
            const newUser = new User({ username, password: hashedPassword, email, fullname });
                //Dua vao trong csdl
            await newUser.save();
                //tra ve token
            const accessToken = jwt.sign({ userId: newUser._id}, process.env.ACCESS_TOKEN_SECRET);           //payload
            
            return res.status(200).json({ success: true, message:"User created success", accessToken});
        } catch (error) {
            console.log(error);
		    return res.status(500).json({ success: false, message: "Internal server error" });
        }
};

// api/auth/login
// login user

const Login = async(req, res) => {
    const{ username, password } = req.body;

    //Validation
    if(!username || !password )
        return res.status(400).json({success: false, message: "Somethings wrong with your Username and/or Password"});
    
        try {
            //kiem tra tai khoan ton tai???
            const user = await User.findOne({ username });

            if(!user)
                return res.status(400).json({success: false, message: "Incorrect Username or Password"});

                //tra ve neu tim thay
            const passwordValid = await argon2.hash(user.password, password);

            if(!passwordValid)
                return res.status(400).json({success: false, message: "Incorrect Username or Password"});
            //tra ve token
            const accessToken = jwt.sign({ userId: user._id}, process.env.ACCESS_TOKEN_SECRET);           //payload
            
            return res.status(200).json({ success: true, message:"Login success", accessToken});
        } catch (error) {
            console.log(error);
		    return res.status(500).json({ success: false, message: "Internal server error" });
        }
};

const UpdateUser = async(req, res) => {
    try {
        const{_id,...rest} = req.body();
        const user = await User.updateOne({ _id:_id },{...rest,updateAt:DateOfNow()});
        if(!user){
            return res.status(400).json({success: false, message:"Somethings wrong"});
        }
        return res.status(200).json({ success: true, message: "Success"});
    } catch (err) {
        console.log("err");
        return res.status(500).json({ success: false, message: "Internal server error" });
    }
};

const UpdatUserbyUser = async(req,res) => {
    try {
        
    } catch (err) {
        console.log("err");
        return res.status(500).json({ success: false, message: "Internal server error" });
    }
};

// api/auth/logout
// logout user

const Logout = (req,res)=>{
    try {
        res.clearCookie("access_ticket",{
        secure:true,
        sameSite:"none",
    }).status(200).json("User has been logout");
    } catch(err) {
        console.log(err);
        return res.status(400).send("Somethings wrong?");
    }
};

module.exports = {GetUser, Register, Login, UpdateUser, Logout}