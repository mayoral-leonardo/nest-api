import { Controller, Post, Body, Get, Param, Delete } from '@nestjs/common';
import { UserResponsibilityService } from './userResponsibility.service';

@Controller('user-responsibility')
export class UserResponsibilityController {
  constructor(
    private readonly userResponsibilityService: UserResponsibilityService,
  ) {}

  @Post('assign')
  async assignResponsibility(
    @Body('responsibleUserId') responsibleUserId: number,
    @Body('dependentUserIds') dependentUserIds: number[],
  ) {
    return this.userResponsibilityService.assignResponsibility(
      Number(responsibleUserId),
      dependentUserIds,
    );
  }

  @Get(':responsibleUserId/dependents')
  async getDependents(@Param('responsibleUserId') responsibleUserId: number) {
    return this.userResponsibilityService.getDependents(
      Number(responsibleUserId),
    );
  }

  @Get(':dependentUserId/responsibles')
  async getResponsibles(@Param('dependentUserId') dependentUserId: number) {
    return this.userResponsibilityService.getResponsibles(
      Number(dependentUserId),
    );
  }

  @Delete('remove')
  async removeResponsibility(
    @Body('responsibleUserId') responsibleUserId: number,
    @Body('dependentUserId') dependentUserId: number,
  ) {
    return this.userResponsibilityService.removeResponsibility(
      Number(responsibleUserId),
      Number(dependentUserId),
    );
  }
}
