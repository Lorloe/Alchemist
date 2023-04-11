const express = require('express');
const router = express.Router();

const {GetAllCourse, CreateCourse, UpdateCourse, DeleteCourse, CreateLesson, GetAllLesson, UpdateLesson, DeleteLesson ,GetLessonSpecific} = require('../controllers/CourseController');

//Course
router.post("/create-course", CreateCourse);
router.get("/get-all-course", GetAllCourse);
router.post("/update-course", UpdateCourse);
router.delete("/delete-course", DeleteCourse);

//Lesson
router.post("/create-lesson/:id", CreateLesson);
router.get("/get-all-lesson/:id", GetAllLesson);
router.post("/update-lesson/:id/:lessonID", UpdateLesson);
router.delete("/delete-lesson/:id/:lessonID", DeleteLesson);

router.get("/get-lesson-id/:id/:index", GetLessonSpecific);


module.exports = router;