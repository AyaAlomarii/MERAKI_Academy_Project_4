const express = require("express");
/* import functions from controller and middlewares
ex
const { createArticle ,getAllArticles,getArticlesByAuthor} = require("../controllers/articles");

 */

// create users router
const categoryRouter = express.Router();
//export it
module.exports = categoryRouter;