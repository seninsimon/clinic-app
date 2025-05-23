import { RegisterDoctor } from "../../application/usecases/doctor/Register";
import { Request , Response } from "express";






export class DoctorController{
    constructor(
        private registerDoc : RegisterDoctor 
        
    ){}


    async doctorSignup(req : Request , res : Response) : Promise<void>
    {
         
        try {
            const data : any = req.body
            console.log("docdata",data)
            const registerDoctor = await this.registerDoc.signupDoctor(data)
            res.status(201).json({message : "user registerd" , data : registerDoctor})
        } catch (error) {
            res.status(500).json({message : "internal server error in registering doctor"})
        }
       
        
    }
}