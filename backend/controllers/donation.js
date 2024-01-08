const donationModel=require("../models/donationSchema")



// 1. this function create new donation
const createDonation= (req, res) => {
    const { amount  }= req.body

    const newDonation= new donationModel({ 
        amount,donor:req.token.userId
})
    
newDonation.save()


.then((result)=>{
        res.status(201).json({
        success: true,
        message: "Success the  Donation made",
        Donation: result,
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
    createDonation
}; 