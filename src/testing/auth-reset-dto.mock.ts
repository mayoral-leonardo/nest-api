import { AuthResetDTO } from '../auth/dto/auth-reset.dto';
import { accessToken } from './access-token.mock';

export const authResetDTOMock: AuthResetDTO = {
  password: '654321',
  token: accessToken,
};
