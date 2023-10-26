// auth.service.ts
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Userservice } from './user.services';
import { UserModule } from './user.module';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from "mongoose";
import { UserDto } from './user.dto';
import * as jwt from 'jsonwebtoken';
import { config } from 'dotenv';
config();

@Injectable()
export class AuthService {
  constructor(
    @InjectModel('User') private UserModel:Model<UserDto>,
    private readonly userService: Userservice,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.userService.getOneUser(email,password);
    if (user && user.password === password) {
      return user;
    }
    return null;
  }

  async login(user: UserDto) {

    const {email,password}=user;

    const userf=await this.UserModel.findOne({email});
     console.log(userf)
    const payload = { sub: userf._id, email: user.email };
    console.log(payload)
  
    const token=jwt.sign(payload,"vgvjnbhjknknkinjklnj");
    return token;
    // const token=this.jwtService.sign({payload});
  

    // return {
      
    //   access_token: this.jwtService.sign({payload}),
      
    // };
    
  }
}
