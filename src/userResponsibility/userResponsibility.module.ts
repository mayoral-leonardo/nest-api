import { Module } from '@nestjs/common';
import { UserResponsibilityService } from './userResponsibility.service';
import { UserResponsibilityController } from './userResponsibility.controller';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [UserResponsibilityController],
  providers: [UserResponsibilityService, PrismaService],
})
export class UserResponsibilityModule {}
