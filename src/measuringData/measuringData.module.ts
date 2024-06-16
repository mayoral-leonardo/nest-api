import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { MeasuringDataController } from './measuringData.controller';
import { MeasuringDataService } from './measuringData.service';

@Module({
  imports: [PrismaModule],
  controllers: [MeasuringDataController],
  providers: [MeasuringDataService],
  exports: [],
})
export class MeasuringDataModule {}
