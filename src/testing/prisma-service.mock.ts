import { PrismaService } from '../prisma/prisma.service';
import { prismaUserEntityList } from './prisma-user-entity.list.mock';
import { prismaMeasuringDataEntityList } from './prisma-measuring-data-entity.list.mock';
import { prismaDependentUserResponsibilityEntityList } from './prisma-user-responsibility-entity.list.mock';

export const prismaMock = {
  user: {
    create: jest.fn().mockResolvedValue(prismaUserEntityList[0]),
    findMany: jest.fn().mockResolvedValue(prismaUserEntityList),
    findUnique: jest.fn().mockResolvedValue(prismaUserEntityList[0]),
    update: jest.fn().mockResolvedValue(prismaUserEntityList[0]),
    delete: jest.fn().mockResolvedValue(true),
    count: jest.fn().mockResolvedValue(true),
  },
  measurement: {
    create: jest.fn().mockResolvedValue(prismaMeasuringDataEntityList[0]),
    findMany: jest.fn().mockResolvedValue(prismaMeasuringDataEntityList),
  },
  userResponsibility: {
    createMany: jest.fn().mockResolvedValue({ count: 1 }),
    findMany: jest
      .fn()
      .mockResolvedValue(prismaDependentUserResponsibilityEntityList),
    delete: jest.fn().mockResolvedValue({ success: true }),
  },
};

export const PrismaServiceMock = {
  provide: PrismaService,
  useValue: prismaMock,
};
