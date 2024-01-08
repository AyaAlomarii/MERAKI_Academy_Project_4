const express = require("express");
// create initiative router
const initiativeRouter= express.Router();
const authentication=require("../middleware/authentication")
const authorization=require("../middleware/authorization")
initiativeRouter.use(authentication)




// import functions from controller and middlewares

const { createNewInitiative , getAllInitiative,createNewReview,createNewDonation} = require("../controllers/initiative");



// endpoint for the POST request (createNewInitiative)
initiativeRouter.post("/",authentication,authorization("create a donation"),createNewInitiative);


// endpoint for the GET request (getAllInitiative)
initiativeRouter.get("/",authentication,getAllInitiative);


// endpoint for the create a new Review
initiativeRouter.post("/:initiativeId/review",authentication,authorization("create a donation") ,createNewReview);
// endpoint for the create a new donation
initiativeRouter.post("/:initiativeId/donation",authentication,authorization("create a donation") ,createNewDonation);


module.exports = initiativeRouter;