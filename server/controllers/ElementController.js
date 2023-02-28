const express = require('express');
const router = express.Router();
require("dotenv").config();

const Element = require('../models/Element');

//Get all elements

const ListElements = async(req,res) => {
    try {
        const elements = await Element.find();
        return res.status(200).json({success: true, elements});
    } catch (error) {
        res.status(400).send("Error");
        console.log(err);
    }
};

//Find a element

const FindAElement = async (req,res) => {
    try {
        const {elementID} = req.body;
        const element = await Element.findOne({ name: elementID });
        if(!element){
            return res.status(404).send("Element can not found");
        }
        res.status(200).send(element);
    } catch(err) {
        console.log(err);
        res.status(400).send("Error");
    }
};

//Update element

const UpdateElement = async (req,res) => {
    try{
        const { elementName,...rest } = req.body;
        const element = await Element.findOne({ name: elementName });
          
        if(!element){
            return res.status(404).send("Somethings Wrong Can Not found");
        }
        await Element.updateOne({ name: elementName }, rest);
        res.status(200).send("Success");
    } catch(err) {
        console.log(err);
        res.status(400).send("Error");     
    }
};

const CreateElement = async (req, res) => {
    try {
        const { elementName, elementNumber, elementMass, symbol, symbolReact, result } = req.body;
        const element = new Element({
            elementName,
            elementNumber,
            elementMass,
            symbol,
            reactWith: [
                symbolReact,
                result
            ],
        });

        await element.save();
        res.status(200).send("Success");
    } catch (err) { 
        console.log(err);
        res.status(400).send("Error");
    }
};

// const CreateElement = async (req, res) => {
//     try {
//         const { elementName, elementNumber, elementMass, symbol, reactWith } = req.body;

//         //Tạo 1 mảng các đối tượng cho ReactWith, với mỗi phần tử trong symbol và result được biểu thị như một đối tượng có thuộc tính "type"
//         const reactWithObjects = reactWith.map((react) => {
//             return {
//                 symbol: react.symbol.map((s) => ({ type: s })),
//                 result: react.result.map((r) => ({ type: r })),
//             };
//         });
//         const element = new Element({
//             elementName,
//             elementNumber,
//             elementMass,
//             symbol,
//             reactWith: reactWithObjects,
//         });
//         await element.save();
//         res.status(200).send("Success");
//     } catch (err) { 
//         console.log(err);
//         res.status(400).send("Error");
//     }
// };

const DeleteElement = async (req,res) => {
    try {
        const { elementName,...rest } = req.body;
        const element = await Element.findOne({ name: elementName });
        if(element == null){
            return res.status(400).send("Element not found");
        }
        await element.remove();
        res.status(200).send("Element Deleted");
    } catch (err) {
        console.log(err);
        res.status(400).send("Fail");
    }
};

module.exports = {ListElements, FindAElement, UpdateElement, CreateElement, DeleteElement}