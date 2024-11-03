import { Test, TestingModule } from '@nestjs/testing';
import {
  prismaDependentUserResponsibilityEntityList,
  prismaResponsibleUserResponsibilityEntityList,
} from '../testing/prisma-user-responsibility-entity.list.mock';
import {
  userResponsibilityMock,
  userResponsibilityServiceMock,
} from '../testing/user-responsibility-data-service.mock';
import { UserResponsibilityController } from './userResponsibility.controller';

describe('UserResponsibilityController', () => {
  let userResponsibilityController: UserResponsibilityController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserResponsibilityController],
      providers: [userResponsibilityServiceMock],
    }).compile();

    userResponsibilityController = module.get<UserResponsibilityController>(
      UserResponsibilityController,
    );
  });

  test('Validate definitions', () => {
    expect(userResponsibilityController).toBeDefined();
  });

  describe('Responsibility', () => {
    test('Assign', async () => {
      const result = await userResponsibilityController.assignResponsibility(
        1,
        [4],
      );

      expect(result).toEqual({ count: 1 });
    });

    test('Get Dependents', async () => {
      const result = await userResponsibilityController.getDependents(1);

      expect(result).toEqual(
        prismaDependentUserResponsibilityEntityList.map(
          (item) => item.dependentUser,
        ),
      );
    });

    test('Get Responsibles', async () => {
      const result = await userResponsibilityController.getResponsibles(1);

      expect(result).toEqual(
        prismaResponsibleUserResponsibilityEntityList.map(
          (item) => item.responsibleUser,
        ),
      );
    });

    test('Remove Responsibility', async () => {
      const result = await userResponsibilityController.removeResponsibility(
        1,
        4,
      );

      expect(result).toEqual({ success: true });
    });
  });
});
