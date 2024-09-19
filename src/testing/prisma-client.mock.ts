import { PrismaClient } from '@prisma/client';
import { prismaUserEntityList } from './prisma-user-entity.list.mock';

export const prismaMock = {
  user: {
    create: jest.fn().mockResolvedValue(prismaUserEntityList[0]),
    findMany: jest.fn().mockResolvedValue(prismaUserEntityList),
    findUnique: jest.fn().mockResolvedValue(prismaUserEntityList[0]),
    update: jest.fn().mockResolvedValue(prismaUserEntityList[0]),
    delete: jest.fn().mockResolvedValue(true),
    count: jest.fn().mockResolvedValue(true),
  },
};

export const prismaClientMock = {
  provide: PrismaClient,
  useValue: prismaMock,
};
