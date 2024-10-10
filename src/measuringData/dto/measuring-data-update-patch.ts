import { PartialType } from '@nestjs/mapped-types';
import { MeasuringDataRegisterDTO } from './measuring-data-register';

export class MeasuringDataUpdatePatchDTO extends PartialType(
  MeasuringDataRegisterDTO,
) {}
