import { UserService } from '../user/user.service';
import { prismaUserEntityList } from './prisma-user-entity.list.mock';

export const userMock = {
  show: jest.fn().mockResolvedValue(prismaUserEntityList[0]),
  create: jest.fn().mockResolvedValue(prismaUserEntityList[0]),
  list: jest.fn().mockResolvedValue(prismaUserEntityList),
  update: jest.fn().mockResolvedValue(prismaUserEntityList[0]),
  updatePartial: jest.fn().mockResolvedValue(prismaUserEntityList[0]),
  delete: jest.fn().mockResolvedValue(true),
  exists: jest.fn().mockResolvedValue(true),
};

export const userServiceMock = {
  provide: UserService,
  useValue: userMock,
};
