const express = require("express");
// create users router
const reviewRouter = express.Router();

const { createNewReview} = require("../controllers/review");
const authentication=require("../middleware/authentication")
const authorization=require("../middleware/authorization")
reviewRouter.use(authentication)

// endpoint for the POST request (createNewInitiative)
reviewRouter.post("/",authentication,authorization("create a donation"),createNewReview);



//export it
module.exports = reviewRouter;