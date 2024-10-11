import { Role } from '../enums/role.enum';
import { CreateUserDTO } from '../user/dto/create-user-dto';

export const createUserDTOMock: CreateUserDTO = {
  name: 'Leonardo',
  email: 'leonardo@teste.com',
  password: '123456',
  cpf: '49904520038',
  birthAt: '2000-01-01',
  role: Role.Admin,
};
