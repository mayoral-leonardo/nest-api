import { UserService } from '../user/user.service';

export const userMock = {
  show: jest.fn(),
  create: jest.fn(),
  list: jest.fn(),
  update: jest.fn(),
  updatePartial: jest.fn(),
  delete: jest.fn(),
  exists: jest.fn(),
};

export const userServiceMock = {
  provide: UserService,
  useValue: userMock,
};
