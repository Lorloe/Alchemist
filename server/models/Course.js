const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ListLessonContent = new Schema({
    name:{
        type: String,
        require: true
    },
    lessonID:{
        type: Object,
        unique: true
    },
    content:{
        type: Object,
    },
    _id:false,
});

const CourseSchema = new Schema({
    id:{
        type: String,
        unique: true,
        require: true,
    },
    level:{
        type: String,
    },
    name:{
        type: String,
        require: true,
    },
    image:{
        type: String,
    },
    price:{
        type: Number,
        default: 0
    },
    createdAt : {
        type: Date, 
        default: Date.now
    },
    updateAt: {
        type: Date,
        default: Date.now
    },
    description: {
        type: String
    },
    expectation: {
        type: String
    },
    lesson: [ListLessonContent],
});

module.exports = mongoose.model('Courses',CourseSchema);

