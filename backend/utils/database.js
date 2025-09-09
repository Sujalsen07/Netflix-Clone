import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const databaseConnection=()=>{
    console.log("MONGO_URI from env:", process.env.MONGO_URI);

        mongoose.connect(process.env.MONGO_URI).then(()=>{

            console.log("mongodb connected successfully");
        }).catch((error)=>{
            console.log(error);
        })

    };
    export default databaseConnection;
