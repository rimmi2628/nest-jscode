import { Document } from 'mongoose';

export interface UserDto{
    _id:string,
    name:string,
    email:string,
    password:string,
   
}