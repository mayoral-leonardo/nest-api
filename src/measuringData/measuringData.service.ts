import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { MeasuringDataRegister } from './dto/measuring-data-register';

@Injectable()
export class MeasuringDataService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: MeasuringDataRegister) {
    return data;
  }

  async list() {
    return 'List';
  }
}
