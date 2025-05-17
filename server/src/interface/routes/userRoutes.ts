import { RegisterUser } from "../../application/usecases/user/RegisterUser";

import express from "express";
import { UserRepositoryImpl } from "../../infrartucture/repositories/UserMongoRepo";
import { UserController } from "../controller/UserController";
const   router = express.Router()

//dependency injection 

const userRepo = new UserRepositoryImpl()

const registeruser = new RegisterUser(userRepo)

const usercontroller = new UserController(registeruser)


router.post('/signup',(req,res)=>usercontroller.signup(req,res))



export {router as userRouter}