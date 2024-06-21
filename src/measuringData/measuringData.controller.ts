import { Controller, Post, Get, Body } from '@nestjs/common';
import { MeasuringDataRegisterDTO } from './dto/measuring-data-register';
import { MeasuringDataService } from './measuringData.service';

@Controller('measuringData')
export class MeasuringDataController {
  constructor(private readonly measuringDataService: MeasuringDataService) {}

  @Post()
  async create(@Body() body: MeasuringDataRegisterDTO) {
    const data = {
      ...body,
      equipment_ID: Number(body.equipment_ID),
      user_ID: Number(body.user_ID),
      value: Number(body.value),
    };
    return this.measuringDataService.create(data);
  }

  @Get()
  async list() {
    return this.measuringDataService.list();
  }
}
