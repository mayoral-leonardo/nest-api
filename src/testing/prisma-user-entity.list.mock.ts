import { Role } from '../enums/role.enum';

export const prismaUserEntityList = [
  {
    id: 1,
    name: 'Leonardo',
    email: 'leonardo@teste.com',
    password: '$2b$10$faOmjce5qbVRig5QRqNMduUuQ5suWoYhvCcr9hHBkv.zGA00BoNcS',
    role: Role.Admin,
    birthAt: new Date('2000-01-01'),
    createdAt: new Date(),
    updatedAt: new Date(),
    height: 200,
    weight: 100,
  },
  {
    id: 2,
    name: 'Leonardo',
    email: 'leonardouser@teste.com',
    password: '$2b$10$faOmjce5qbVRig5QRqNMduUuQ5suWoYhvCcr9hHBkv.zGA00BoNcS',
    role: Role.Admin,
    birthAt: new Date('2000-01-01'),
    createdAt: new Date(),
    updatedAt: new Date(),
    height: 200,
    weight: 100,
  },
];
