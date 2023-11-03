// import { Module } from '@nestjs/common';
// import { MongooseModule } from '@nestjs/mongoose';
// import { UserController } from './user.controller';
// import { Userservice } from './user.services';
// import { JwtService } from '@nestjs/jwt';
// import { AuthService } from './auth.services';
// import { JwtStrategy } from './jwt.strategy';
// import { User, UserSchema } from './user.schema';
// import { PassportModule } from '@nestjs/passport';
// import { JwtModule } from '@nestjs/jwt';

// const passportModule = PassportModule.register({ defaultStrategy: 'jwt' });
// @Module({
//   imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
// passportModule,
// JwtModule.register({
//   global: true,
//   secret:"cncjmvhjnvgjgb",
//   signOptions: { expiresIn: '3600s' },
// }),


// ],
//   controllers: [UserController],
//   providers: [Userservice,JwtService,AuthService,JwtStrategy,],
//   exports: [passportModule, JwtStrategy],
// })
// export class UserModule {
//   constructor(){
//     console.log("User Module");
//   }
// }

import { Module } from '@nestjs/common';
import { Userservice } from './user.services';
import { Usercontroller } from './user.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User,UserSchema } from './user.schema';
import { JwtService } from '@nestjs/jwt';
import { AuthService } from './auth.services';


@Module({
  imports:[MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])],
  controllers: [Usercontroller],
  providers: [Userservice,JwtService,AuthService],
  exports: [Userservice,JwtService,AuthService],
})
export class UserModule {}