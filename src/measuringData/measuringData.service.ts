import { BadRequestException, Injectable } from '@nestjs/common';
import { MeasuringDataRegisterDTO } from './dto/measuring-data-register';
import { PrismaService } from '../prisma/prisma.service';
import { MeasuringDataUpdatePutDTO } from './dto/measuring-data-update-put';
import { MeasuringDataUpdatePatchDTO } from './dto/measuring-data-update-patch';
import { UserService } from '../user/user.service';

@Injectable()
export class MeasuringDataService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly userService: UserService,
  ) {}

  async create(data: MeasuringDataRegisterDTO) {
    await this.userService.exists(data.user_ID);
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

  async list(user_id: number) {
    return await this.prisma.measurement.findMany({
      where: {
        user_ID: user_id,
      },
    });
  }

  async listAll() {
    return await this.prisma.measurement.findMany();
  }

  async show(id: number) {
    await this.exists(id);

    return await this.prisma.measurement.findUnique({
      where: {
        measurement_ID: id,
      },
    });
  }

  async update(
    id: number,
    { equipment_ID, unit, value }: MeasuringDataUpdatePutDTO,
  ) {
    await this.exists(id);

    return await this.prisma.measurement.update({
      data: {
        equipment_ID,
        unit,
        value,
      },
      where: {
        measurement_ID: id,
      },
    });
  }

  async updatePartial(
    id: number,
    { equipment_ID, unit, value }: MeasuringDataUpdatePatchDTO,
  ) {
    await this.exists(id);

    const data: any = {};

    if (equipment_ID) data.equipment_ID = equipment_ID;
    if (unit) data.unit = unit;
    if (value) data.value = value;

    return await this.prisma.measurement.update({
      data,
      where: {
        measurement_ID: id,
      },
    });
  }

  async delete(id: number) {
    await this.exists(id);
    return await this.prisma.measurement.delete({
      where: {
        measurement_ID: id,
      },
    });
  }

  async exists(id: number) {
    if (
      !(await this.prisma.measurement.count({
        where: {
          measurement_ID: id,
        },
      }))
    ) {
      throw new BadRequestException(`Measuring data with id ${id} not found!`);
    }
  }
}
