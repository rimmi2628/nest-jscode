import { PassportStrategy } from "@nestjs/passport";

import { Strategy,VerifyCallback } from "passport-google-oauth20";

import { config } from 'dotenv';

import { Injectable } from '@nestjs/common';


config(); 

Injectable();

export class GoogleStrategy extends PassportStrategy(Strategy, 'google'){
    constructor() {
        super({
          clientID: '827317734671-ci9dmfnunufppaa5u3b2c8mhm5boe3mr.apps.googleusercontent.com',
          clientSecret: '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',
          callbackURL: 'http://localhost:3000/google/redirect',
          scope: ['accessToken'],
        });
      }
      async validate (accessToken: string,res:Response): Promise<any> {
        console.log("Access Token:", accessToken);
    
        console.log("BJJJNm")
   
        const user = {
         
          accessToken
        }
      
    
     
      }
    }


 
    