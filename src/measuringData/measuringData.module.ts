import { Module } from '@nestjs/common';
import { MeasuringDataController } from './measuringData.controller';
import { MeasuringDataService } from './measuringData.service';
import { PrismaModule } from '../prisma/prisma.module';
import { UserModule } from '../user/user.module';
import { UserService } from '../user/user.service';

@Module({
  imports: [PrismaModule, UserModule],
  controllers: [MeasuringDataController],
  providers: [MeasuringDataService, UserService],
  exports: [],
})
export class MeasuringDataModule {}
