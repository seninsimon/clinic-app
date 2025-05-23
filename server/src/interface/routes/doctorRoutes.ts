import { DoctorController } from "../controller/DoctorController";
import { DoctorRepoImp } from "../../infrartucture/repositories/DoctorMongoRepo";
import { RegisterDoctor } from "../../application/usecases/doctor/Register";
import express from "express"
const router = express.Router()


// 1. Create repository instance
const docotRepo = new DoctorRepoImp()
//database to usecase to controller
// 2. Create use case instances
const registerDoctor = new RegisterDoctor(docotRepo)


//3. inject all to the controller
const doctorController = new DoctorController(
    registerDoctor
)


router.post('/doctor-signup',(req,res)=>doctorController.doctorSignup(req,res))



export {router as doctorRouter}


