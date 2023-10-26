import { Controller,Post,Delete,Get,Param,Body,HttpStatus,Res, UseGuards } from "@nestjs/common";
import { UserDto } from "./user.dto";
import { Userservice } from "./user.services";
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.services';
import { response } from "express";

@Controller('user')
export class UserController {
   constructor(private readonly Userservice: Userservice ,
    private readonly authService: AuthService) { }
@Post('/adduser')
   async createUser(@Res() response, @Body() UserDto: UserDto) {
  try {
    const newUser = await this.Userservice.createUser(UserDto);
    return response.status(HttpStatus.CREATED).json({
    message: 'User has been created successfully',
    newUser,});

 } catch (err) {
    return response.status(HttpStatus.BAD_REQUEST).json({
    statusCode: 400,
    message: err,
    error: 'Bad Request'
 });
 }
   }
   @Get("/getuser")
   async finduser(@Res() response ){
    try {
      const findu=await this.Userservice.getAllUser();
      return response.status(HttpStatus.CREATED).json({
        message:"User found succesfully",
        findu
      })
    } catch (error) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        statusCode: 400,
        message: error,
        error: 'Bad Request'
      });
    }
    

   

   }

   @Get("/login")
    async login(@Res() response,@Body() user: any) {
      try {
      const us=await  this.authService
      .login(user);
      if(us){
        return response.status(HttpStatus.CREATED).json({
          message:"User login succesfully",
          token:us
        })
      }
    } catch (error) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        statusCode: 400,
        message: error,
        error: 'Bad Request'
      });
    }
    }
  

  
  }