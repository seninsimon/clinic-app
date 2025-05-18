import { IOtp } from "../../domain/entities/Otp";
import { IUser } from "../../domain/entities/User";
import { UserRepository } from "../../domain/repositories/UserRepository";
import { OtpModel } from "../models/Otpmodel";
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

    async createOtp(data: IOtp): Promise<void> {

        const otp = await OtpModel.create(data)
        
    }

    async verifyOtp(email: string, otp: string): Promise<void> {

        const user = await OtpModel.findOne({email})
        
        if(!user) throw new Error("invalid user")
            
        if(user.otp !== otp) throw new Error("invalid otp")

        await UserModel.findOneAndUpdate({email},{isVerified : true})

        await OtpModel.findByIdAndDelete(user.id)

        
    }

     
}