import { Module } from '@nestjs/common';
import { MeasuringDataController } from './measuringData.controller';
import { MeasuringDataService } from './measuringData.service';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [MeasuringDataController],
  providers: [MeasuringDataService],
  exports: [],
})
export class MeasuringDataModule {}
