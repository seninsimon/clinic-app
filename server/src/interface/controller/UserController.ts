import { Request , Response } from "express";
import { RegisterUser } from "../../application/usecases/user/RegisterUser";

export class UserController {
    constructor(
        private registerUser : RegisterUser
    ){}


    // 1. Signup
    async signup(req : Request , res : Response) : Promise<void>
    {
        try {

            const {name , email , password , phone , gender} = req.body
            const userRegistered = await this.registerUser.signup({name , email , password , phone , gender})
            res.status(201).json({message : "user registerd" , data : userRegistered})
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : "Internal server error"
            res.status(500).json({message : errorMessage})
        }
    }
}

