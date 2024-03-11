import { Module } from '@nestjs/common';
import { UploadModule } from './modules/upload/upload.module';
import { UploadController } from './modules/upload/upload.controller';

@Module({
  imports: [UploadModule],
  controllers: [UploadController],
  providers: [],
})
export class AppModule {}
