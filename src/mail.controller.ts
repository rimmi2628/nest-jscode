import { Controller,Post,Body,Res,HttpStatus} from "@nestjs/common";
import { Mailservices } from "./mail.service";


@Controller('mailer')

export class Mailcontroller{
constructor(private readonly mailservices:Mailservices){}


@Post('send')
  async sendEmail(@Res() response,
    @Body('to') to: string,
    @Body('subject') subject: string,
    @Body('text') text: string,
  ): Promise<void> {
    this.mailservices.sendMail(to, subject, text);
    return response.status(HttpStatus.CREATED).json({
        message: 'mail send successfully',
       });
    
  }


}