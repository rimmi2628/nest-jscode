import { Module,NestModule,MiddlewareConsumer } from "@nestjs/common";

import { Bookmiddelware } from "./book.middelware";
@Module({
    imports:[],
    controllers:[],
    providers:[]
})
export class BookModule implements NestModule{
configure(consumer: MiddlewareConsumer) {
   consumer.apply(Bookmiddelware).forRoutes('book')
   
}
}