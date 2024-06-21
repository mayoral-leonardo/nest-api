import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { MeasuringDataRegisterDTO } from './dto/measuring-data-register';

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
    // if ((data as any).measurement_ID) delete (data as any).measurement_ID;
    // return await this.prisma.measurement.create({
    //   data,
    // });
  }

  async list() {
    return await this.prisma.measurement.findMany();
  }
}
