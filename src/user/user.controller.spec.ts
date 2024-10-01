import { Test, TestingModule } from '@nestjs/testing';
import { Role } from '../enums/role.enum';
import { AuthGuard } from '../guards/auth.guard';
import { RoleGuard } from '../guards/role.guard';
import { createUserDTOMock } from '../testing/create-user-dto.mock';
import { guardMock } from '../testing/guard.mock';
import { prismaUserEntityList } from '../testing/prisma-user-entity.list.mock';
import { updatePatchUserDTOMock } from '../testing/update-patch-user-dto.mock';
import { updatePutUserDTOMock } from '../testing/update-put-user-dto.mock';
import { userServiceMock } from '../testing/user-service.mock';
import { CreateUserDTO } from './dto/create-user-dto';
import { UpdatePatchUserDTO } from './dto/update-patch-user-dto';
import { UpdatePutUserDTO } from './dto/update-put-user-dto';
import { UserController } from './user.controller';
import { UserService } from './user.service';

describe('UserController', () => {
  let userController: UserController;
  let userService: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [userServiceMock],
    })
      .overrideGuard(AuthGuard)
      .useValue(guardMock)
      .overrideGuard(RoleGuard)
      .useValue(guardMock)
      .compile();

    userService = module.get<UserService>(UserService);
    userController = module.get<UserController>(UserController);
  });

  test('Validate definitions', () => {
    expect(userController).toBeDefined();
    expect(userService).toBeDefined();
  });

  describe('Guards test', () => {
    test('Validate Guards application', async () => {
      const guards = Reflect.getMetadata('__guards__', UserController);

      expect(guards.length).toEqual(2);
      expect(new guards[0]()).toBeInstanceOf(AuthGuard);
      expect(new guards[1]()).toBeInstanceOf(RoleGuard);
    });
  });

  describe('Create', () => {
    test('Method: Create', async () => {
      const result = await userController.create(createUserDTOMock);

      expect(result).toEqual(prismaUserEntityList[0]);
    });
  });

  describe('Read', () => {
    test('Method: List', async () => {
      const result = await userController.list();

      expect(result).toEqual(prismaUserEntityList);
    });

    test('Method: Show', async () => {
      const result = await userController.show(1);

      expect(result).toEqual(prismaUserEntityList[0]);
    });
  });

  describe('Update', () => {
    test('Method: Update', async () => {
      const result = await userController.update(updatePutUserDTOMock, 1);

      expect(result).toEqual(prismaUserEntityList[0]);
    });

    test('Method: Update Partial', async () => {
      const result = await userController.updatePartial(
        updatePatchUserDTOMock,
        1,
      );

      expect(result).toEqual(prismaUserEntityList[0]);
    });
  });

  describe('Delete', () => {
    test('Method: Delete', async () => {
      const result = await userController.delete(1);

      expect(result).toEqual({ success: true });
    });
  });
});
