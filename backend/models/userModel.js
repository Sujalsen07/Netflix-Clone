import mongoose from "mongoose";

//here we creating schema in database
const userSchema = new mongoose.Schema({
    fullName:{
        type:String,
        require:true
    },
    Email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    }


},{timestamps:true});

//now we need to export the schema
export const User = mongoose.model("User",userSchema);