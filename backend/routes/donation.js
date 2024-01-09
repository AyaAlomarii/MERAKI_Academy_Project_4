const express = require("express");
// create users router
const donationRouter = express.Router();
//const {  } = require("../controllers/donation");
const authentication=require("../middleware/authentication")
const authorization=require("../middleware/authorization")
donationRouter.use(authentication)



//export it
module.exports = donationRouter;