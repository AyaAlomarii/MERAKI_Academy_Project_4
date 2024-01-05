const mongoose = require("mongoose");

// role schema 
const roleSchema = new mongoose.Schema({
    role: { type: String, required: true ,unique:true},
    permissions: [{ type: String, required: true}]

});


//export it 
module.exports=mongoose.model("Role",roleSchema)
