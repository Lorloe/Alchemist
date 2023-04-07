const Lesson = require("../models/Lesson");

//Get List lesson

const ListLesson = async (req,res) => {
    try {
        const lesson = await Lesson.findOne();
        const handleLesson = lesson.map((item)=>{
            let lessonObj = {name:"",number:0,id:"",description:""};                           
                        lessonObj.name = item["name"];   
                        lessonObj.id = item["id"];
                        lessonObj.description = item["description"];
                        lessonObj.numberOfQuestion = item["content"].length;         
                        return lessonObj;                   
            });
    } catch (err) {
        console.log(err);
        return res.status(400).send("Error");
    }
};

//Get A Lesson

const GetALesson = async (req,res) => {
    try {
        const {lessonID} = req.body;
        const lesson = await Lesson.findOne({id:lessonID});
        if(!lesson){
            return res.status(404).send("Lesson Not Found");
        }
        res.status(200).send(lesson);
    } catch (err) {
        console.log(err);
        return res.status(400).send("Error");
    }
};

//Update Lesson

const UpdateLesson = async(req,res) => {
    try{ 
        const {lessonID,...rest} = req.body;
        const lesson = await Lesson.findOne({id:lessonID});
        if(!lesson)
            return res.status(404).send("Lesson Not Found");

        await Lesson.updateOne({id:lessonID},rest);
        res.status(200).send("Success");
    }catch(err){
        console.log(err);
        res.status(400).send("Error");
    }
};

//Create Lesson 

const CreateLesson = async (req,res) => {
    try {
        const {id, name, description, price, content} = req.body;
        
        const contentArray = content.map((react) =>{
            const { LessonContent } = react;
                return {
                    LessonContent: {type: LessonContent}
                };
        });
        const lesson = new Lesson({
            id,
            name,
            description,
            price,
            content:[contentArray]
        });
        await lesson.save();
        res.status(200).send("Success");
    } catch (err) {
        console.log(err);
        res.status(400).send("Somethings wrong");
    }
}

//Delete Lesson

const DeleteLesson = async(req,res) => {
    try {
        const {lessonID} = req.body;
        const lesson = await Lesson.findOne({id:lessonID});
        if(!lesson)
            return res.status(404).send("Lesson Not Found");

        await Lesson.remove();
        res.status(200).send("Delete success");
    } catch (error) {
        console.log(err);
        res.status(400).send("Somethings wrong");
    }
}


module.exports = {ListLesson, GetALesson, UpdateLesson, CreateLesson, DeleteLesson}