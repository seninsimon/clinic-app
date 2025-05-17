import { UserRepository } from "../../../domain/repositories/UserRepository";
import { IUser } from "../../../domain/entities/User";
import bcrypt from "bcryptjs"
import { sendMail } from "../../services/nodeMailerService";
import { generateOtp } from "../../services/OtpSevice";
import jwt from "jsonwebtoken"


export class Login {
    constructor(
        private userRepo : UserRepository
    ){}

    async loginUser(email : string , password : string) : Promise<{message : string ,token : string|null,  data : Partial<IUser> }>
    {
        
        const user = await this.userRepo.findByEmail(email)
        if(!user) throw new Error("invalid crendentials")

        
       
        const passwordMatch = await bcrypt.compare(password , user.password!)
        if(!passwordMatch) throw new Error("invalid crendentials")
        
            if (!user.isVerified) {
            const otp = generateOtp();

            // Save OTP in your OTP collection (make sure this method is implemented)
            await this.userRepo.createOtp({ email, otp, createdAt: new Date() });

            // Send OTP via email
            await sendMail(email, otp);

            // Stop login flow
            console.log("please verify your email")
            
            return {message : "verification required " , token : null , data : user }
            
            }
        
        


           
        const accessToken = jwt.sign(
        { id: user._id , role : user.role},
        process.env.JWT_SECRET!,
        { expiresIn: '15m' }
      );
        
                
        return {message : "login success" , token : accessToken , data : user}
    }
}