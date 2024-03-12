import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateMediaDto } from './dto/create-media.dto';
import { UploadService } from '../upload/upload.service';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class MediaService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly uploadService: UploadService,
  ) {}

  async findAll() {
    const medias = await this.prisma.media.findMany();

    return {
      data: medias,
      meta: {
        count: medias.length,
      },
    };
  }

  async create(dto: CreateMediaDto, file: Express.Multer.File) {
    const key: string = uuidv4();
    const { title, description } = dto;
    const { originalname, mimetype } = file;

    const { url } = await this.uploadService.upload(key, file);

    return await this.prisma.media.create({
      data: {
        title,
        fileName: originalname,
        description,
        type: mimetype,
        url,
      },
    });
  }
}
