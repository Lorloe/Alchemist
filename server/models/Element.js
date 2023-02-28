const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ReactSchema = new Schema({
    result:{
        type: String,
    },
    symbol:{
        type: String,
    }    
});

const ElementSchema = new Schema({
    elementName:{
        type: String,
        required: true,
        unique: true
    },
    elementNumber:{
        type: String,
        required: true,
    },
    elementMass:{
        type: String,
        require: true
    },
    symbol:{
        type: String,
        require: true
    },
    reactWith:[
        ReactSchema
    ]
});

module.exports = mongoose.model('elements', ElementSchema);