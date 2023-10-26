import { NestFactory } from '@nestjs/core';
import { RootModule} from './root.module';
import { NextFunction,Request,Response } from 'express';


// function globalmiddelware(req:Request ,res:Response,next:NextFunction){
//   console.log("this is global middelware 1");
//   next();
// }
async function bootstrap() {
  const app = await NestFactory.create(RootModule);
  // app.use(globalmiddelware)
  await app.listen(3000);
}
bootstrap();
