import { Module } from '@nestjs/common';
import { UploadModule } from './modules/upload/upload.module';
import { MediaModule } from './modules/media/media.module';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './modules/prisma/prisma.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    PrismaModule,
    UploadModule,
    MediaModule,
  ],
})
export class AppModule {}
