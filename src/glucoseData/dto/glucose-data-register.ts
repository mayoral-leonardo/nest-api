import { IsNumberString } from 'class-validator';

export class GlucoseDataRegister {
  @IsNumberString()
  dataString: string;
}
