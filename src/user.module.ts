import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserController } from './user.controller';
import { Userservice } from './user.services';
import { JwtService } from '@nestjs/jwt';
import { AuthService } from './auth.services';

import { User, UserSchema } from './user.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])],
  controllers: [UserController],
  providers: [Userservice,JwtService,AuthService],
})
export class UserModule {
  constructor(){
    console.log("User Module");
  }
}
