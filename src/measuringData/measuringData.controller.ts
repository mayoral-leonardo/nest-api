import {
  Controller,
  Post,
  Get,
  Body,
  Put,
  Patch,
  Delete,
} from '@nestjs/common';
import { ParamId } from '../decorators/param-id.decorator';
import { MeasuringDataRegisterDTO } from './dto/measuring-data-register';
import { MeasuringDataUpdatePatchDTO } from './dto/measuring-data-update-patch';
import { MeasuringDataUpdatePutDTO } from './dto/measuring-data-update-put';
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

  @Get(':id')
  async show(@ParamId() id: number) {
    return this.measuringDataService.show(id);
  }

  @Put(':id')
  async update(@Body() body: MeasuringDataUpdatePutDTO, @ParamId() id: number) {
    const data = {
      ...body,
      equipment_ID: Number(body.equipment_ID),
      user_ID: Number(body.user_ID),
      value: Number(body.value),
    };
    return this.measuringDataService.update(id, data);
  }

  @Patch(':id')
  async updatePartial(
    @Body() body: MeasuringDataUpdatePatchDTO,
    @ParamId() id: number,
  ) {
    const data = {
      ...body,
      equipment_ID: Number(body.equipment_ID),
      user_ID: Number(body.user_ID),
      value: Number(body.value),
    };
    return this.measuringDataService.updatePartial(id, data);
  }

  @Delete(':id')
  async delete(@ParamId() id: number) {
    return {
      success: await this.measuringDataService.delete(id),
    };
  }
}
