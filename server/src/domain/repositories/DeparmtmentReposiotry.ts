import { IDepartment } from "../entities/Department";




export interface DepartmentRepository {
    
    createDepartment(DeptData : Partial<IDepartment>) : Promise<IDepartment>
    findAll() : Promise<IDepartment[]>;
    // findById(id : string) : Promise<IDepartment>
    // update(id : string , deptData : Partial<IDepartment>) : Promise<IDepartment | null>
    // delete(id: string): Promise<IDepartment | null>;
    findByName(name: string): Promise<IDepartment | null>;

}