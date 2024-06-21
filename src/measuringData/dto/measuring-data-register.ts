import { IsOptional, IsString } from 'class-validator';

export class MeasuringDataRegisterDTO {
  @IsOptional()
  equipment_ID: number;

  user_ID: number;

  value: number;

  @IsOptional()
  @IsString()
  unit: string;
}
