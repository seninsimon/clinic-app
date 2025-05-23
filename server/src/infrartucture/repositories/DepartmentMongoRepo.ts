import { IDepartment } from "../../domain/entities/Department";
import { DepartmentRepository } from "../../domain/repositories/DeparmtmentReposiotry";
import DepartmentModel from "../models/DepartmentModel";




export class DepartmentRepoImp implements DepartmentRepository {

    async createDepartment(DeptData: IDepartment): Promise<IDepartment> {
        const newDept = await DepartmentModel.create(DeptData)
        return newDept
    }

    async findAll(): Promise<IDepartment[]> {
       const allDept = await DepartmentModel.find()
       return allDept        
    }
      
//    async findById(id: string): Promise<IDepartment> {
        
//     }

   async findByName(name: string): Promise<IDepartment | null> {
    const dept = await DepartmentModel.findOne({deptName : name})
    return dept
        
    }

//    async delete(id: string): Promise<IDepartment | null> {
        
//     }

//     update(id: string, deptData: Partial<IDepartment>): Promise<IDepartment | null> {
        
//     }
}