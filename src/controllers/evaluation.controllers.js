const express = require("express")

const router = express.Router()

const Evaluation = require("../models/evaluation.model");




router.get("", async (req, res) => {
    try {
        const eveluation= await Evaluation.find().populate("student_id").populate("instructor_details").lean().exec();
        return res.send(eveluation);
    } catch (err) {
        return res.status(500).json({message: err.message,status:"Failed"});
    }

})

router.get("/highestMarks", async (req, res) => {
    try {
        const eveluation= await Evaluation.find().populate("student_id").populate("instructor_details").lean().exec();
        let arr=[];
        let max=0;
        for(let i=0;i<eveluation.length;i++) {
            if(eveluation[i].student_marks>max) {
                max=eveluation[i].student_marks;
            }
        }
        for(let i=0;i<eveluation.length;i++) {
            if(eveluation[i].student_marks==max) {
                arr.push(eveluation[i]);
            }
        }
        return res.send(arr);
    } catch (err) {
        return res.status(500).json({message: err.message,status:"Failed"});
    }

})


router.post("", async (req, res) => {
    try {
        const evaluation= await Evaluation.create(req.body);
        return res.status(201).send(evaluation);
    } catch (err) {
        return res.status(500).json({message: err.message,status:"Failed"});
    }
})

router.delete("/:id",async(req,res) => {
    try {
        const evaluation= await Evaluation.findByIdAndDelete(req.params.id).lean().exec();
        return res.status(200).send(evaluation);
    } catch (err) {
        return res.status(500).json({message: err.message,status:"Failed"});
    }
})

router.patch("/:id", async (req, res) => {
    try {
        const evaluation= await Evaluation.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec();
        return res.status(201).send(evaluation);
    } catch (err) {
        return res.status(500).json({message: err.message,status:"Failed"});
    }
})

module.exports =router;