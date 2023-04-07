const express = require('express');
const router = express.Router();
const argon2 = require('argon2');
const jwt = require('jsonwebtoken');
const {DateOfNowString,DateOfNow} = require("../utils/dateOfNow");
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

//admin update

const UpdateUser = async(req, res) => {
    try {
        const{_id,password,...rest} = req.body;
        const hash = argon2.hash(password);
        const user = await User.updateOne({ _id:_id},{password: hash,...rest,updateAt:DateOfNow()});
        if(!user){
            return res.status(400).json({success: false, message:"Somethings wrong"});
        }
        return res.status(200).json({ success: true, message: "Success"});
    } catch (err) {
        console.log(err);
        return res.status(500).json({ success: false, message: "Internal server error" });
    }
};

//user update

const UpdateUserByUser = async(req,res) => {
    try {
        const{username, password, fullname, email} = req.body;
        const hashedPassword = await argon2.hash(password);
        const user = await User.updateOne({username, password: hashedPassword, email, fullname});
        await user.updateOne();
        return res.status(200).json({ message:"Success"});
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

// List user

// const ListUser = async (req,res) => {
//     const user = await User.find();
//     const date = DateOfNowString();
// }

module.exports = {GetUser, Register, Login, UpdateUser, UpdateUserByUser, Logout}