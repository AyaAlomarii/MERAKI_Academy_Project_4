const express = require("express");
/* import functions from controller and middlewares
ex
const { createArticle ,getAllArticles,getArticlesByAuthor} = require("../controllers/articles");

 */

// create users router
const donationRouter = express.Router();
//export it
module.exports = donationRouter;