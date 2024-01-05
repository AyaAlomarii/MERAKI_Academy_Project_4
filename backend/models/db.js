const mongoose = require("mongoose");
require("dotenv").config();
mongoose
.connect(process.env.DATABASE_URI)
.then(() => {
    console.log("DB Ready To Use");
})
.catch((err) => {
    console.log(err);
});