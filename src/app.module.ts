import { Module } from '@nestjs/common';
import { UploadModule } from './modules/upload/upload.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), UploadModule],
  providers: [],
})
export class AppModule {}
