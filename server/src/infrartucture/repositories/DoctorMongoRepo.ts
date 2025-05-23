import { IDoctor } from "../../domain/entities/Doctor";
import { DocotorRepository } from "../../domain/repositories/DoctorRepository";
import { DoctorModel } from "../models/DoctorModel";



export class DoctorRepoImp implements DocotorRepository
{
   

   async createDoctor(doctor: Partial<IDoctor>): Promise<IDoctor> {

    const createdDoctor = await DoctorModel.create(doctor)
    console.log("doc created in mongorepo")
    return createdDoctor

    
    }

    
   async findByEmail(email: string): Promise<IDoctor | null> {

    const doc = await DoctorModel.findOne({email})
    return doc
        
    }
}