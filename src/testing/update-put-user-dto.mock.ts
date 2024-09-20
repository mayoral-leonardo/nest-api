import { Role } from '../enums/role.enum';
import { UpdatePutUserDTO } from '../user/dto/update-put-user-dto';

export const updatePutUserDTOMock: UpdatePutUserDTO = {
  name: 'Leonardo',
  email: 'leonardo@teste.com',
  password: '123456',
  birthAt: '2000-01-01',
  role: Role.Admin,
};
