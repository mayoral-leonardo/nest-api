import { IsNumberString } from 'class-validator';

export class MeasuringDataRegister {
  @IsNumberString()
  dataString: string;
}
