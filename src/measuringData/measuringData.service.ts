import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { MeasuringDataRegisterDTO } from './dto/measuring-data-register';

@Injectable()
export class MeasuringDataService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: MeasuringDataRegisterDTO) {
    return await this.prisma.measurement.create({
      data,
    });
  }

  async list() {
    return await this.prisma.measurement.findMany();
  }
}
