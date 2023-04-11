const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username:{
        type: String,
        required: true,
        unique: true,
        maxLength:20
    },
    password:{
        type: String,
        required: true,
    },
    nickname:{
        type: String,
        maxLength: 20
    },
    birthday:{
        type: Date,
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    createdAt:{
        type: Date,
        default: Date.now
    },
    updateAt:{
        type:Date,
        default: Date.now
    },
    isAdmin:{
        type:Boolean,
        default:false
    }
});

module.exports = mongoose.model('users', UserSchema);