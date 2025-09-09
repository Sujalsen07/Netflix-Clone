import express from "express";
import dotenv from "dotenv";
import databaseConnection from "./utils/database.js";
import cookieParser from "cookie-parser";
import userRoute from "./routes/userRoute.js";
import cors from "cors";

// Load environment variables from .env file

databaseConnection();

dotenv.config({
    path: ".env"
});

const app = express();
//middlewares
app.use(express.urlencoded({extended:true}))
app.use(express.json()); 
app.use(cookieParser())
const corsOptions={
    origin:'http://localhost:3000',
    credentials:true,
}
app.use(cors(corsOptions));
// GOOD: Sends a response

// Listen on the port from the environment variable
app.listen(process.env.PORT, () => {
    console.log(`Server listening at port ${process.env.PORT}`);
});


//API
app.use("/api/v1/user",userRoute);    
//http://localhost:8080/api/v1/user/register