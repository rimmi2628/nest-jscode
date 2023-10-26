import { Injectable, BadRequestException } from '@nestjs/common';
import { multerConfig } from './multer.config';

@Injectable()
export class UploadService {
  async uploadFile(file: Express.Multer.File): Promise<string> {
    console.log(file);
    if (!file) {
      throw new BadRequestException('No file uploaded');
    }
    return file.filename;
  }
}
