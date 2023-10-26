import  * as nodemailer from 'nodemailer';
import { Injectable } from '@nestjs/common';

@Injectable()

export class Mailservices{
private readonly transporter;

constructor(){
    this.transporter=nodemailer.createTransport({
        host:'smtp.gmail.com',
        port:465,
        secure:true,
        auth:{
            user:'s12348946@gmail.com',
            pass:'eoojjzvhokpmtrbg',
        }
    })
}
async sendMail(to:string, subject: string, text: string):Promise<void>{
    const mailOptions={
      from:"s12348946@gmail.com",
      to,
      subject,
      text

    }
    await this.transporter.sendMail(mailOptions);

}

}
