import { Test, TestingModule } from '@nestjs/testing';
import { AuthGuard } from '../guards/auth.guard';
import { RoleGuard } from '../guards/role.guard';
import { guardMock } from '../testing/guard.mock';
import { userServiceMock } from '../testing/user-service.mock';
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
});
