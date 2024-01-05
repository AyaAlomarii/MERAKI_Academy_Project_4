const mongoose = require("mongoose");

// Initiative  schema 
const InitiativeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    duration: { type: Number },
    city: { type: String, required: true },
    currentAmount: { type: Number, required: true},
    volunteerLimit: { type: Number, required: true },
    reviewsSent :[{type : String}],
    
    plan :{
        //representing each day with times
        schedule: [{type:String , required:true}],
        listOfDuties: [{type:String ,required:true}],
        targetAmount: {type:Number , required:true},
        startDate: {type:Date , required:true},
        endDate: {type:Date , required:true},
        targetAudience: {type:String , required:true},


    },
    volunteerRequirements :{
        //representing each day with times
        ageGroup: {type:String , required:true},
        requirementSkills: [{type:String , required:true}],

    },

    category:{type:mongoose.Schema.Types.ObjectId,ref:"Category"},
});


//export it 
module.exports=mongoose.model("Initiative",InitiativeSchema)
