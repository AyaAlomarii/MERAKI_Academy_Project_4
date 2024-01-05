const mongoose = require("mongoose");

// user schema 
const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    age: { type: Number },
    country: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role:{type:mongoose.Schema.Types.ObjectId,ref:"Role"}
});


//export it 
module.exports=mongoose.model("User",userSchema)
