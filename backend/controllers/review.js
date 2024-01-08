const reviewModel=require("../models/reviewSchema")



// 1. this function create new review
const createNewReview= (req, res) => {
    const {  review  }= req.body

    const newReview= new reviewModel({ 
        review,reviewer:req.token.userId
})
    
newReview.save()


.then((result)=>{
        res.status(201).json({
        success: true,
        message: "Success the  review made",
        review: result,
        })
    }).catch((err)=>{
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Server error",
        })
    })
};










module.exports = { 
    createNewReview
}; 