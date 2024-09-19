import { JwtService } from '@nestjs/jwt';

export const jwtMock = {
  sign: jest.fn(),
  verify: jest.fn(),
};

export const jwtServiceMock = {
  provide: JwtService,
  useValue: jwtMock,
};
