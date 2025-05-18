import { IUser } from "../entities/User";
import { IOtp } from "../entities/Otp";

export interface UserRepository{
   createUser(user:Partial<IUser>):Promise<IUser>
   findByEmail(email:string):Promise<IUser|null>
   createOtp(data: IOtp): Promise<void>;
   verifyOtp(email: string, otp: string): Promise<void>;
//    findByGoogleId(googleId:string):Promise<IUser|null>
    // fetchUser():Promise<IUser[]>;
    // blockunblock(userid:string, isBlocked:boolean):Promise<IUser>
    // findByEmailAndUpdate(password:string, email:string):Promise<IUser|null>
    // findById(userid:string):Promise<{ isBlocked: boolean; email: string }|null>
    // findOneuser(userId:string):Promise<IUser|null>
    // edituser(userId:string, update:Partial<IUser>):Promise<IUser>
}