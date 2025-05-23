//controller always has usecases controller depends upon usecases
import { Request , Response } from "express"
import { AddDepartment } from "../../application/usecases/admin/AddDepartment"
import { FindDepartment } from "../../application/usecases/admin/FindDept"




export class AdminController {
    constructor(
        private AddDept : AddDepartment,
        private allDepts : FindDepartment
    )
    {}


    async createDepartment(req : Request , res : Response) : Promise<void>
    {
        try {

            const {deptName , description} = req.body
            console.log("add dept data in controller",{deptName , description})
            const newDept = await this.AddDept.addDept({deptName , description})
            console.log(newDept)
            res.status(200).json({message : "dept add success" , dept : newDept})
            
        } catch (error : any) {
            console.log("error in add dept controller",error.message)
            res.status(500).json({message : "internal server in adding dept"})
            
        }

    }

    async allDept(req : Request , res : Response) : Promise<void>
    {
        try {

            const fetchDept = await this.allDepts.findDept()
             res.status(200).json({message : "all depts fetched"  , fetchDept})
            
        } catch (error : any) {
            console.log(error.message)
            
        }
    }
}