import { Controller, Post, Get, Body } from '@nestjs/common';
import { GlucoseDataRegister } from './dto/glucose-data-register';
import { GlucoseDataService } from './glucoseData.service';

@Controller('glucose')
export class GlucoseDataController {
  constructor(private readonly glucoseDataService: GlucoseDataService) {}

  @Post()
  async create(@Body() body: GlucoseDataRegister) {
    return this.glucoseDataService.create(body);
  }

  @Get()
  async list() {
    return this.glucoseDataService.list();
  }
}
