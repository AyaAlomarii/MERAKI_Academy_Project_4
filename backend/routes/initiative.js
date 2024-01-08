const express = require("express");
// create initiative router
const initiativeRouter= express.Router();
const authentication=require("../middleware/authentication")
const authorization=require("../middleware/authorization")
initiativeRouter.use(authentication)




// import functions from controller and middlewares

const { createNewInitiative , getAllInitiative} = require("../controllers/initiative");



// endpoint for the POST request (createNewInitiative)
initiativeRouter.post("/",authentication,authorization("create a donation"),createNewInitiative);


// endpoint for the GET request (getAllInitiative)
initiativeRouter.get("/",authentication,getAllInitiative);




module.exports = initiativeRouter;