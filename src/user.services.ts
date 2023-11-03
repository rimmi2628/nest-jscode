import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { UserDto } from './user.dto';
import { JwtService } from '@nestjs/jwt';
import { Model } from "mongoose";
import { AuthService } from './auth.services';


@Injectable()
export class Userservice {
  
constructor(@InjectModel('User') private UserModel:Model<UserDto>, private jwtService: JwtService) { }
async createUser(UserDto: UserDto): Promise<UserDto> {
   const newUser = await new this.UserModel(UserDto);
   return newUser.save();
}


async getAllUser(): Promise<UserDto[]> {
    const userData = await this.UserModel.find();
    if (!userData || userData.length == 0) {
        throw new NotFoundException('user data not found!');
    }
    return userData;
}

async getOneUser(email: string): Promise<any> {
 const data=await this.UserModel.findOne({ email }).exec();

}



}

