const express = require('express');
const router = express.Router();
require("dotenv").config();
const Course = require("../models/Course");

//Get all course
const GetAllCourse = async (req,res) => {
    try {
        const course = await Course.find({});
        return res.status(200).send(course);
    } catch (err) {
        console.log(err)
        return res.status(400).json({success: false, message: "Error"});
    }
};

//Get all course(info)
const ListCourse = async (req,res)  => {
    try{
    const course = await Course.find({});
    const handlecourse = course.map((item)=>{
    const courseobj = {
        id:item.courseID,
        name:item.name,
        image:item.image,
        price:item.price,
        description:item.description,
        };
        return courseobj;
    });
    return res.status(200).send(handlecourse)
    }
    catch(err){
        console.log(err);
        return res.status(400).send("Error");  
    }
};

//create a new course
const CreateCourse = async (req,res) => {
    try{
        const{name, image, price, description, expectation, lesson} = req.body;
        const course = new Course({
            name, 
            image, 
            price, 
            description, 
            expectation,
            lesson
        });
        await course.save();
        return res.status(200).json({ message: 'Course created successfully', course });
    } catch(err){
        console.log(err);
        return res.status(400).json({success: false, message: "Error"});
    }
};

//update course
const UpdateCourse = async (req,res) => {
    try {
        const{_id,...rest} = req.body;
        const course = await Course.findOne({ id: _id });
        if(!course){
            res.status(400).send("Can not find course");
        }
        await Course.updateOne({ id: _id }, rest);
        res.status(200).send("Update success");
    } catch (err) {
        console.log(err);
        res.status(400).json({success: false, message: "Error"});
    }
};

//Delete course
const DeleteCourse = async (req,res) => {
    try {
        const{_id,...rest} = req.body;
        const course = await Course.findOne({ id: _id });
        if(!course){
            res.status(400).send("Can not find course");
        }
        await Course.deleteOne({ id: _id }, rest);
        res.status(200).send("Delete success");
    } catch (err) {
        console.log(err);
        res.status(400).json({success: false, message: "Error"});
    }
};

//Add a new lesson to a course
const CreateLesson = async (req,res) => {
    try {
        const {id} = req.params;
        const {name, lessonID, content} = req.body;
        const course = await Course.findById(id);
        if (!course) {
            return res.status(400).json({ message: 'Course not found' });
        }
        const lesson = {
            id,
            name,
            lessonID,
            content
        };
        course.lesson.push(lesson);
        await course.save();
        return res.status(200).json({ message: 'Lesson added successfully', course });
    } catch (err) {
        console.error(err);
        return res.status(400).json({ message: 'Add error' });
    }
};

//Get all lessons for a course
const GetAllLesson = async (req,res) => {
    try {
        const {id} = req.params;
        const course = await Course.findById(id);
        if(!course){
            return res.status(404).json({ message: 'Course not found' });
        }
        const lesson = course.lesson;
        return res.status(200).json({ lesson });
    } catch (err) {
        console.error(err);
        return res.status(400).json({ message: 'Error' });
    }
};

//Update a lesson for a course
const UpdateLesson = async (req, res) => {
    try {
        const { id, lessonID } = req.params;
        const { name, content } = req.body;  
        const course = await Course.findById(id);
  
        if (!course) {
            return res.status(404).json({ message: 'Course not found' });
        }
        const lesson = course.lesson.find(lesson => lesson.lessonID === lessonID);
  
        if (!lesson) {
            return res.status(404).json({ message: 'Lesson not found' });
        }
        lesson.name = name;
        lesson.content = content;
        await course.save(); 
        return res.status(200).json({ message: 'Lesson updated successfully', course });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: 'Something might error' });
    }
};

//Delete a lesson for a course
const DeleteLesson = async (req, res) => {
    try {
        const { id, lessonID } = req.params;
        const course = await Course.findById(id);

        if (!course) {
            return res.status(404).json({ message: 'Course not found' });
        }
        course.lesson = course.lesson.filter(lesson => lesson.lessonID !== lessonID);
        await course.save();
        return res.status(200).json({ message: 'Lesson deleted successfully', course });
    } catch (err) {
        console.log(err);
        return res.status(400).json({ message: 'Error' })
    }
};
 
module.exports = {GetAllCourse, ListCourse, CreateCourse, UpdateCourse, DeleteCourse, CreateLesson, GetAllLesson, UpdateLesson, DeleteLesson};