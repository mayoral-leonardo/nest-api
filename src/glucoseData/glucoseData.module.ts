import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { GlucoseDataController } from './glucoseData.controller';
import { GlucoseDataService } from './glucoseData.service';

@Module({
  imports: [PrismaModule],
  controllers: [GlucoseDataController],
  providers: [GlucoseDataService],
  exports: [],
})
export class GlucoseModule {}
