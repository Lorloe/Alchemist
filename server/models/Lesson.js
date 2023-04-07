const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LessonContent = new Schema({
    type:{
        type:String
    },
    content:{
        type:Object
    },
    _id:false,
});

const LessonSchema = new Schema({
    id:{
        type: String,
        unique: true,
    },
    name:{
        type: String,
        require: true,
    },
    price:{
        type: String,
    },
    description: {
        type: String
    },
    content:[LessonContent],
});

module.exports = mongoose.model('lessons',LessonSchema);

