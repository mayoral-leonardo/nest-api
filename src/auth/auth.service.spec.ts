import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { prismaMock } from '../testing/prisma-service.mock';
import { jwtServiceMock } from '../testing/jwt-service.mock';
import { userServiceMock } from '../testing/user-service.mock';
import { prismaClientMock } from '../testing/prisma-client.mock';
import { prismaUserEntityList } from '../testing/prisma-user-entity.list.mock';
import { accessToken } from '../testing/access-token.mock';
import { jwtPayload } from '../testing/jwt-payload.mock';
import { authRegisterDTOMock } from '../testing/auth-register-dto.mock';

describe('AuthService', () => {
  let authService: AuthService;
  const { user: userMock } = prismaMock;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        prismaClientMock,
        jwtServiceMock,
        userServiceMock,
      ],
    }).compile();

    authService = module.get<AuthService>(AuthService);
  });

  test('Validate definitions', () => {
    expect(authService).toBeDefined();
    expect(userMock).toBeDefined();
  });

  describe('Token', () => {
    test('Create Token', async () => {
      const result = await authService.createToken(prismaUserEntityList[0]);

      expect(result).toEqual({ accessToken });
    });

    test('Check Token', async () => {
      const result = await authService.checkToken(accessToken);

      expect(result).toEqual(jwtPayload);
    });

    test('isValidToken', async () => {
      const result = await authService.isValidToken(accessToken);

      expect(result).toEqual(true);
    });
  });
  describe('Authentication', () => {
    test('Method: Login', async () => {
      const result = await authService.login('leonardo@teste.com', '123456');

      expect(result).toEqual({ accessToken });
    });

    test('Method: Forgot', async () => {
      const result = await authService.forgot('leonardo@teste.com');

      expect(result).toEqual(true);
    });

    test('Method: Reset', async () => {
      const result = await authService.reset('123456', accessToken);

      expect(result).toEqual({ accessToken });
    });

    test('Method: Register', async () => {
      const result = await authService.register(authRegisterDTOMock);

      expect(result).toEqual({ accessToken });
    });
  });
});
