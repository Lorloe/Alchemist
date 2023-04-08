const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CombinationSchema = new Schema({
    name:{
        type: String,
        require: true
    },
    elements:{
        type: Array,
    },
    category:{
        type: String,
        require: true
    }
    
});

module.exports = mongoose.model('combination',CombinationSchema)