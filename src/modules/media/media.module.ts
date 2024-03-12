import { Module } from '@nestjs/common';
import { MediaController } from './media.controller';
import { MediaService } from './media.service';
import { UploadService } from '../upload/upload.service';

@Module({
  controllers: [MediaController],
  providers: [MediaService, UploadService],
})
export class MediaModule {}
