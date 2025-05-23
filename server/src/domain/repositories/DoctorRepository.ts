import { IDoctor } from "../entities/Doctor";



export interface DocotorRepository{

    createDoctor(doctor : Partial<IDoctor>) : Promise<IDoctor>
    findByEmail(email : string) : Promise<IDoctor| null>

}