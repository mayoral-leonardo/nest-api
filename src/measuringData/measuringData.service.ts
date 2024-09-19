import { BadRequestException, Injectable } from '@nestjs/common';
import { MeasuringDataRegisterDTO } from './dto/measuring-data-register';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class MeasuringDataService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: MeasuringDataRegisterDTO) {
    try {
      return await this.prisma.measurement.create({
        data,
      });
    } catch (error) {
      throw new BadRequestException(
        `Invalid parameters! Please review and try again!`,
      );
    }
  }

  async list() {
    return await this.prisma.measurement.findMany();
  }
}
