import { AddDepartment } from "../../application/usecases/admin/AddDepartment";
import { FindDepartment } from "../../application/usecases/admin/FindDept";
import { DepartmentRepoImp } from "../../infrartucture/repositories/DepartmentMongoRepo";
import { AdminController } from "../controller/AdminController";
import express from "express"
const router = express.Router()





const departmentRepo = new DepartmentRepoImp


const addDepartment = new AddDepartment(departmentRepo)
const findAllDepts = new FindDepartment(departmentRepo)




const admincontroller = new AdminController(addDepartment, findAllDepts)



router.post("/admin/add-department" , (req,res)=>admincontroller.createDepartment(req,res))
router.get("/admin/fetch-departments" , (req,res)=>admincontroller.allDept(req,res))









export {router as adminRouter}