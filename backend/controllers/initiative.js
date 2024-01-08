const initiativeModel=require("../models/initiativeSchema")
/* const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken"); */



// 1. this function to create an Initiative

const createNewInitiative = (req, res) => {
    const {  name,
        description,
    duration,
    city,
    currentAmount,
    volunteerLimit, plan :{
        //representing each day with times
        schedule,
        listOfDuties,
        targetAmount,
        startDate,
        endDate,
        targetAudience},
    volunteerRequirements :{
        
        ageGroup,
        requirementSkills
    },
    
    reviewsSent,
    category,donation}= req.body
    

    const newInitiative = new initiativeModel( {  name,
        description,
    duration,
    city,
    currentAmount,
    volunteerLimit, plan :{
        //representing each day with times
        schedule,
        listOfDuties,
        targetAmount,
        startDate,
        endDate,
        targetAudience},
    volunteerRequirements :{
        
        ageGroup,
        requirementSkills
    },
    
    reviewsSent,
    category,donation,author:req.token.userId})
    
    newInitiative.save().then((result)=>{
        res.status(201).json({
        success: true,
        message: "Article created",
        article : result,
        })
    }).catch((err)=>{
        console.log(err);
        res.status(409).json({
            success: false,
            message: "Server Error",
            err: err
        })
    })
    };

// 2. this function to gel all Initiative

const getAllInitiative=(req,res)=>{
    initiativeModel.find({})
    //re active them when you finish create all schemas
   // .populate("review")
 
    .populate("category")
   // .populate("donation")
    
    .then((result)=>{
        res.status(200).json({
        success: true,
        message: "All the Initiative",
        initiative : result,
        })
        }).catch((err)=>{
            console.log(err);
            res.status(500).json({
                success: false,
                message: "Server Error",
                err: err
            })
        })

}


module.exports = { 
    createNewInitiative,
    getAllInitiative,
}; 