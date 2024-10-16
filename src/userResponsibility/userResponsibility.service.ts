import { Injectable, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UserResponsibilityService {
  constructor(private readonly prisma: PrismaService) {}

  async assignResponsibility(
    responsibleUserId: number,
    dependentUserIds: number[],
  ) {
    const responsibilities = dependentUserIds.map((dependentUserId) => ({
      responsibleUserId,
      dependentUserId,
    }));

    return this.prisma.userResponsibility.createMany({
      data: responsibilities,
      skipDuplicates: true,
    });
  }

  async getDependents(responsibleUserId: number) {
    const dependents = await this.prisma.userResponsibility.findMany({
      where: { responsibleUserId },
      include: { dependentUser: true },
    });

    return dependents.map((dependency) => ({
      id: dependency.dependentUser.id,
      name: dependency.dependentUser.name,
      height: dependency.dependentUser.height,
      weight: dependency.dependentUser.weight,
    }));
  }

  async getResponsibles(dependentUserId: number) {
    const responsibles = await this.prisma.userResponsibility.findMany({
      where: { dependentUserId },
      include: { responsibleUser: true },
    });

    return responsibles.map((responsibility) => ({
      id: responsibility.responsibleUser.id,
      name: responsibility.responsibleUser.name,
      height: responsibility.responsibleUser.height,
      weight: responsibility.responsibleUser.weight,
    }));
  }

  async removeResponsibility(
    responsibleUserId: number,
    dependentUserId: number,
  ) {
    const dependents = await this.getDependents(responsibleUserId);

    if (!dependents.find((item) => item.id === dependentUserId))
      throw new BadRequestException(
        `User with id ${dependentUserId} is not a dependent of user with id ${responsibleUserId}!`,
      );

    try {
      const response = await this.prisma.userResponsibility.delete({
        where: {
          responsibleUserId_dependentUserId: {
            responsibleUserId,
            dependentUserId,
          },
        },
      });
      if (response) return { success: true };
    } catch {
      throw new BadRequestException('Something went wrong!');
    }
  }
}
