import { RegisterUser } from "../../application/usecases/user/RegisterUser";
import { OtpCreation } from "../../application/usecases/otp/Otpcreation";
import { VerifyOtp } from "../../application/usecases/otp/OtpVerification";
import { Login } from "../../application/usecases/user/Login";

import express from "express";
import { UserRepositoryImpl } from "../../infrartucture/repositories/UserMongoRepo";
import { UserController } from "../controller/UserController";
const   router = express.Router()

//dependency injection 

// 1. Create repository instance
const userRepo = new UserRepositoryImpl()


//database to usecase to controller
// 2. Create use case instances
const registeruser = new RegisterUser(userRepo);
const otpCreation = new OtpCreation(userRepo);
const verifyOtp = new VerifyOtp(userRepo);
const loginUse = new Login(userRepo);

// 3. Inject all into the controller
const usercontroller = new UserController(
  registeruser,
  otpCreation,
  verifyOtp,
  loginUse
);





router.post('/signup',(req,res)=>usercontroller.signup(req,res))
router.post("/login", (req,res)=>usercontroller.login(req,res) )
router.post("/send-otp", (req,res)=>usercontroller.sendOtp(req,res) )
router.post("/verify-otp", (req,res)=>usercontroller.verifyingOtp(req,res) )
router.post("/google-login", (req,res)=>usercontroller.googleLogin(req,res) )



export {router as userRouter}