const express = require("express");
// create initiative router
const initiativeRouter= express.Router();
const authentication=require("../middleware/authentication")
const authorization=require("../middleware/authorization")





// import functions from controller and middlewares

const { createNewInitiative , getAllInitiative,createNewReview,createNewDonation,getAllInitiativeByCategory,deleteReviewById,deleteInitiativeById} = require("../controllers/initiative");



// endpoint for the POST request (createNewInitiative)
initiativeRouter.post("/",authentication,authorization("create a donation"),createNewInitiative);


// endpoint for the GET request (getAllInitiative)
initiativeRouter.get("/",authentication,getAllInitiative);


// endpoint for the create a new Review
initiativeRouter.post("/:initiativeId/review",authentication,authorization("create a donation") ,createNewReview);
// endpoint for the create a new donation
initiativeRouter.post("/:initiativeId/donation",authentication,authorization("create a donation") ,createNewDonation);
// endpoint for the create a new donation
initiativeRouter.get("/:objectId/category" ,getAllInitiativeByCategory);
deleteInitiativeById
// endpoint for the delete a  review
initiativeRouter.delete("/:id/review" ,deleteReviewById);

// endpoint for the delete an Initiative By its Id
initiativeRouter.delete("/:id" ,deleteInitiativeById);
module.exports = initiativeRouter;