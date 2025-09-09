import express from "express";
import { Login, Logout, Register } from "../controllers/user.js";

const router = express.Router();

router.route("/register").post(Register)
router.route("/Login").post(Login);
router.route("/Logout").get(Logout);

export default router;