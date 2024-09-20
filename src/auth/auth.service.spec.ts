import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { prismaMock } from '../testing/prisma-service.mock';
import { jwtServiceMock } from '../testing/jwt-service.mock';
import { userServiceMock } from '../testing/user-service.mock';
import { prismaClientMock } from '../testing/prisma-client.mock';
import { prismaUserEntityList } from '../testing/prisma-user-entity.list.mock';
import { accessToken } from '../testing/access-token.mock';

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
  });
  describe('Autenticação', () => {});
});
