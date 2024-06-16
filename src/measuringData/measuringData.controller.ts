import { Controller, Post, Get, Body } from '@nestjs/common';
import { MeasuringDataRegister } from './dto/measuring-data-register';
import { MeasuringDataService } from './measuringData.service';

@Controller('measuringData')
export class MeasuringDataController {
  constructor(private readonly measuringDataService: MeasuringDataService) {}

  @Post()
  async create(@Body() body: MeasuringDataRegister) {
    return this.measuringDataService.create(body);
  }

  @Get()
  async list() {
    return this.measuringDataService.list();
  }
}
