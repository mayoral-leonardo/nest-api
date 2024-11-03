import { UserResponsibilityService } from './../userResponsibility/userResponsibility.service';
import {
  prismaDependentUserResponsibilityEntityList,
  prismaResponsibleUserResponsibilityEntityList,
} from './prisma-user-responsibility-entity.list.mock';

export const userResponsibilityMock = {
  assignResponsibility: jest.fn().mockResolvedValue({ count: 1 }),
  getDependents: jest
    .fn()
    .mockResolvedValue(
      prismaDependentUserResponsibilityEntityList.map(
        (item) => item.dependentUser,
      ),
    ),
  getResponsibles: jest
    .fn()
    .mockResolvedValue(
      prismaResponsibleUserResponsibilityEntityList.map(
        (item) => item.responsibleUser,
      ),
    ),
  removeResponsibility: jest.fn().mockResolvedValue({ success: true }),
};

export const userResponsibilityServiceMock = {
  provide: UserResponsibilityService,
  useValue: userResponsibilityMock,
};
