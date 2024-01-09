const initiativeModel=require("../models/initiativeSchema")
const reviewModel=require("../models/reviewSchema")
const donationModel=require("../models/donationSchema")


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
    .populate("reviewsSent")
    .populate("category")
    .populate("donation")
    
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


 // 1. this function to create NEW Review

const createNewReview =async (req, res) => {

    try{ const {initiativeId}=req.params
    const { review}= req.body

    const newReview =  new reviewModel({ 
    review,
    reviewer:req.token.userId
})
    
    await newReview.save()
    //find and update
const result =await initiativeModel.findByIdAndUpdate(initiativeId,{$push:{reviewsSent:newReview}},{
    new: true
    })
//result.comments.push(newComment)
//await result.save()
console.log(result);
res.status(201).json({
    success: true,
    message: "Comment created",
    review: newReview,

    })
}
    catch(err){
    console.log(err);
    res.status(201).json({
        success: false,
        message: "Server Error",
        err: err
    })
    }
}; 

// 1. this function to create NEW Donation

const createNewDonation =async (req, res) => {

    try{ const {initiativeId}=req.params
    const { amount}= req.body

    const newDonation =  new donationModel({ 
        amount,
        Donor:req.token.userId
})
    
await newDonation.save()
    //find and update
const result =await initiativeModel.findByIdAndUpdate(initiativeId,{$push:{donation:newDonation}},{
    new: true
    })
//result.comments.push(newComment)
//await result.save()
console.log(result);
res.status(201).json({
    success: true,
    message: " Donation created",
    review: newDonation,

    })
}
    catch(err){
    console.log(err);
    res.status(201).json({
        success: false,
        message: "Server Error",
        err: err
    })
    }
}; 

const getAllInitiativeByCategory =(req ,res)=>{
    const {objectId}=req.params
    console.log('first', objectId)
    initiativeModel.find({ category: objectId })
    .populate("category")
    .populate("reviewsSent")
    .populate("donation")
    .then((result)=>{
        console.log('result', result)
        if(!result){
            
            return res.status(404).json({
                success: false,
                message: `The Initiative with category => ${objectId} not found`,
                });
        }else{
            console.log('result', result)
            res.status(200).json({
                success: true,
                message: `The category ${objectId} `,
                category: result,
                });
        }

    }).catch((err)=>{
        console.log('err', err)
        res.status(500).json({
            success: false,
            message: `Server Error`,
            err: err.message,
            });
    })
}

module.exports = { 
    createNewInitiative,
    getAllInitiative,
    createNewReview,
    createNewDonation,
    getAllInitiativeByCategory
}; 