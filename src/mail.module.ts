import { Module } from "@nestjs/common";
import { Mailcontroller } from "./mail.controller";
import { Mailservices } from "./mail.service";



@Module({
    controllers:[Mailcontroller],
    exports:[],
    providers:[Mailservices]
})

export class MailModule {}