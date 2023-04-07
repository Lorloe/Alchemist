const express = require('express');
const router = express.Router();

const {ListLesson, GetALesson, UpdateLesson, CreateLesson} = require('../controllers/LessonController');

router.get("/list-lessons", ListLesson);
router.post("/get-lesson", GetALesson);
router.post("/update-lesson", UpdateLesson);
router.post("/create-lesson",CreateLesson);

module.exports = router;