const initiativeModel=require("../models/initiativeSchema")
/* const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken"); */



// 1. this function to create an articles

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




module.exports = { 
    createNewInitiative
}; 