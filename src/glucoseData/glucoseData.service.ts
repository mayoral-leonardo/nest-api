import { Injectable, NotFoundException } from '@nestjs/common';
import { GlucoseDataRegister } from './dto/glucose-data-register';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class GlucoseDataService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: GlucoseDataRegister) {
    return data;
  }

  async list() {
    return 'List';
  }
}
