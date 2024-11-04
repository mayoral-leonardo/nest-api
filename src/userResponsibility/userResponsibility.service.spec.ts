import { Test, TestingModule } from '@nestjs/testing';
import { prismaMock, PrismaServiceMock } from '../testing/prisma-service.mock';
import { UserResponsibilityService } from './userResponsibility.service';
import {
  prismaDependentUserResponsibilityEntityList,
  prismaResponsibleUserResponsibilityEntityList,
} from './../testing/prisma-user-responsibility-entity.list.mock';

describe('UserResponsibilityService', () => {
  let userResponsibilityService: UserResponsibilityService;
  const { userResponsibility: userResponsibilityMock } = prismaMock;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserResponsibilityService, PrismaServiceMock],
    }).compile();

    userResponsibilityService = module.get<UserResponsibilityService>(
      UserResponsibilityService,
    );
  });

  test('Validate definitions', () => {
    expect(userResponsibilityService).toBeDefined();
  });

  describe('Responsibility', () => {
    test('Assign', async () => {
      const result = await userResponsibilityService.assignResponsibility(1, [
        4,
      ]);

      expect(result).toEqual({ count: 1 });
    });

    test('Get Dependents', async () => {
      const result = await userResponsibilityService.getDependents(1);

      expect(result).toEqual(
        prismaDependentUserResponsibilityEntityList.map(
          (item) => item.dependentUser,
        ),
      );
    });

    test('Get Responsibles', async () => {
      jest
        .spyOn(userResponsibilityMock, 'findMany')
        .mockResolvedValueOnce(prismaResponsibleUserResponsibilityEntityList);

      const result = await userResponsibilityService.getResponsibles(1);

      expect(result).toEqual(
        prismaResponsibleUserResponsibilityEntityList.map(
          (item) => item.responsibleUser,
        ),
      );
    });

    test('Remove Responsibility', async () => {
      const result = await userResponsibilityService.removeResponsibility(1, 4);

      expect(result).toEqual({ success: true });
    });
  });
});
