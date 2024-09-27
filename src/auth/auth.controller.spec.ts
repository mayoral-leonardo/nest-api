import { Test, TestingModule } from '@nestjs/testing';
import { AuthGuard } from '../guards/auth.guard';
import { guardMock } from '../testing/guard.mock';
import { AuthController } from './auth.controller';
import { authServiceMock } from '../testing/auth-service.mock';
import { authLoginDTOMock } from '../testing/auth-login-dto.mock';
import { accessToken } from './../testing/access-token.mock';
import { authRegisterDTOMock } from '../testing/auth-register-dto.mock';
import { authForgotDTOMock } from '../testing/auth-forgot-dto.mock';
import { authResetDTOMock } from '../testing/auth-reset-dto.mock';

describe('AuthController', () => {
  let authController: AuthController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [authServiceMock],
    })
      .overrideGuard(AuthGuard)
      .useValue(guardMock)
      .compile();

    authController = module.get<AuthController>(AuthController);
  });

  test('Validate definitions', () => {
    expect(authController).toBeDefined();
  });

  describe('Authentication', () => {
    test('Method: Login', async () => {
      const result = await authController.login(authLoginDTOMock);

      expect(result).toEqual({ accessToken });
    });

    test('Method: Register', async () => {
      const result = await authController.register(authRegisterDTOMock);

      expect(result).toEqual({ accessToken });
    });

    test('Method: Forgot', async () => {
      const result = await authController.forgot(authForgotDTOMock);

      expect(result).toEqual(true);
    });

    test('Method: Reset', async () => {
      const result = await authController.reset(authResetDTOMock);

      expect(result).toEqual({ accessToken });
    });
  });

  describe('Authenticated routes', () => {
    test('Method: Check Token', async () => {
      const result = await authController.checkToken(authLoginDTOMock);

      expect(result).toEqual({
        user: {
          email: 'leonardo@teste.com',
          password: '123456',
        },
      });
    });
  });
});
