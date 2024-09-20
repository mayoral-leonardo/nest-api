import { Test, TestingModule } from '@nestjs/testing';
import { prismaMock, PrismaServiceMock } from '../testing/prisma-service.mock';
import { UserService } from './user.service';
import { CreateUserDTO } from './dto/create-user-dto';
import { Role } from '../enums/role.enum';
import { prismaUserEntityList } from '../testing/prisma-user-entity.list.mock';
import { UpdatePutUserDTO } from './dto/update-put-user-dto';
import { UpdatePatchUserDTO } from './dto/update-patch-user-dto';
import { createUserDTOMock } from '../testing/create-user-dto.mock';
import { updatePatchUserDTOMock } from '../testing/update-patch-user-dto.mock';
import { updatePutUserDTOMock } from '../testing/update-put-user-dto.mock';

describe('UserService', () => {
  let userService: UserService;
  const { user: userMock } = prismaMock;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserService, PrismaServiceMock],
    }).compile();

    userService = module.get<UserService>(UserService);
  });

  test('Validate definitions', () => {
    expect(userService).toBeDefined();
    expect(userMock).toBeDefined();
  });

  describe('Create', () => {
    test('Method: Create', async () => {
      jest.spyOn(userMock, 'count').mockResolvedValueOnce(false);

      const result = await userService.create(createUserDTOMock);

      expect(result).toEqual(prismaUserEntityList[0]);
    });
  });

  describe('Read', () => {
    test('Method: List', async () => {
      const result = await userService.list();

      expect(result).toEqual(prismaUserEntityList);
    });

    test('Method: Show', async () => {
      const result = await userService.show(1);

      expect(result).toEqual(prismaUserEntityList[0]);
    });
  });
  describe('Update', () => {
    test('Method: Update', async () => {
      jest.spyOn(userService, 'exists').mockResolvedValueOnce();
      jest.spyOn(userMock, 'count').mockResolvedValueOnce(false);

      const result = await userService.update(1, updatePutUserDTOMock);

      expect(result).toEqual(prismaUserEntityList[0]);
    });

    test('Method: Update Partial', async () => {
      const result = await userService.updatePartial(1, updatePatchUserDTOMock);

      expect(result).toEqual(prismaUserEntityList[0]);
    });
  });
  describe('Delete', () => {
    test('Method: Delete', async () => {
      const result = await userService.delete(1);

      expect(result).toEqual(true);
    });
  });
});
