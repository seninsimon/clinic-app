import { IUser } from "../../domain/entities/User";
import { UserRepository } from "../../domain/repositories/UserRepository";
import { UserModel } from "../models/UserModel";


export class UserRepositoryImpl implements UserRepository{
   async  createUser(user: Partial<IUser>): Promise<IUser> {

    const createdUser = await UserModel.create(user)
    console.log("user created :" ,createdUser)
    return createdUser
        
    }
  
    async  findByEmail(email: string): Promise<IUser | null> {
        const user = await UserModel.findOne({email})
        return user
    }
}