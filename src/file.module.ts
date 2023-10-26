import { Module } from "@nestjs/common";
import { MulterModule } from "@nestjs/platform-express";
import { UploadController } from "./file.controller";
import { UploadService } from "./file.services";




@Module({
    imports:[
        MulterModule.register({
            dest:'../uploads'
        }),
    ],
    controllers:[UploadController],
    providers:[UploadService],
})
export class FileModule {}