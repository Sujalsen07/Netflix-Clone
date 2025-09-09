import { User } from "../models/userModel.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

export const Login = async (req, res) => {
  try {
    const { Email, password } = req.body;
    if (!Email || !password) {
      return res.status(401).json({
        message: "Invalid data",
        success: false,
      });
    }
    const user = await User.findOne({ Email });
    if (!user) {
      return res.status(401).json({
        message: "Invalid email or password",
        success: false,
      });
    }

    const isMatch = await bcryptjs.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({
        message: "Invalid email or password",
        success: false,
      });
    }

    const tokenData = {
      id: user._id,
    };
    const token = await jwt.sign(tokenData, "bcuhwougbicbhgsjjamplkr", {
      expiresIn: "1d",
    });

    return res
      .status(200)
      .cookie("token", token, { httpOnly: true })
      .json({
        message: `Welcome back ${user.fullName}`,
        success: true,
        user: {
          id: user._id,
          fullName: user.fullName,
          Email: user.Email,
        },
      });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server error", success: false });
  }
};


export const Logout= async(req,res)=>{
    return res.status(200).cookie("token","",{expiresIn:new Date(Date.now()),httpOnly:true}).json({
        message:"user logged out successfully.",
        success:true,
    });
}

export const Register = async(req,res) =>{

    try {
        const {fullName,Email,password} = req.body;
        if(!fullName || !Email || !password){
             return res.status(401).json({
                message:"Invalid data",
                success:false
             })
        }
        const user = await User.findOne({Email});
        if(user){
            return res.status(401).json({
                message:"This email is already used",
                success:false,
            })
        }
        const hashedPassword = await bcryptjs.hash(password,16);
        await User.create({
            fullName,
            Email,
            password:hashedPassword,
        });

        return res.status(201).json({
            message:"Account created successfully.",
            success:true
        })
    } catch (error) {
        console.log(error);
    }
}