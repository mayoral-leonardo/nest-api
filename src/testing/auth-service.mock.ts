import { AuthService } from '../auth/auth.service';
import { accessToken } from './access-token.mock';
import { jwtPayload } from './jwt-payload.mock';

export const authMock = {
  createToken: jest.fn().mockReturnValue({ accessToken }),
  checkToken: jest.fn().mockReturnValue(jwtPayload),
  isValidToken: jest.fn().mockReturnValue(true),
  login: jest.fn().mockResolvedValue({ accessToken }),
  forgot: jest.fn().mockReturnValue(true),
  reset: jest.fn().mockResolvedValue({ accessToken }),
  register: jest.fn().mockResolvedValue({ accessToken }),
};

export const authServiceMock = {
  provide: AuthService,
  useValue: authMock,
};
