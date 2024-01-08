const express = require("express");
// create users router
const donationRouter = express.Router();
const { createDonation } = require("../controllers/donation");
const authentication=require("../middleware/authentication")
const authorization=require("../middleware/authorization")
donationRouter.use(authentication)

// endpoint for the POST request (createNewInitiative)
donationRouter.post("/",authentication,authorization("create a donation"),createDonation);


//export it
module.exports = donationRouter;