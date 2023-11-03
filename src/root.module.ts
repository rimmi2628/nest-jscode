// import { Module } from '@nestjs/common';

// import { UserModule } from './user.module';
// import {GoogleModule} from './google.module';
// import { MongooseModule } from '@nestjs/mongoose';
// import { FileModule } from './file.module';
// import { MailModule } from './mail.module';

// @Module({
//   imports: [MongooseModule.forRoot('mongodb://127.0.0.1:27017/nest'),UserModule,GoogleModule,FileModule,MailModule],
//   controllers: [],
//   providers: [],
// })
// export class RootModule {
//   constructor(){
//     console.log("Root Module");
//   }
// }


import { Module } from "@nestjs/common"
import { MongooseModule } from "@nestjs/mongoose"

import { UserModule } from "./user.module";
import { AuthModule } from "./auth.module";


@Module({
  imports: [UserModule, AuthModule, MongooseModule.forRoot('mongodb://127.0.0.1:27017/nest')],
    
    
})
export class RootModule {}