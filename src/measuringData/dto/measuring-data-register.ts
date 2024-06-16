import {
  IsNumberString,
  IsOptional,
  IsString,
  IsNumber,
} from 'class-validator';

export class MeasuringDataRegisterDTO {
  measurement_ID: number;

  @IsOptional()
  equipment_ID: number;

  user_ID: number;

  value: number;

  @IsOptional()
  @IsString()
  unit: string;
}
