import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user-dto';
import { PrismaService } from './../prisma/prisma.service';
import { UpdatePutUserDTO } from './dto/update-put-user-dto';
import { UpdatePatchUserDTO } from './dto/update-patch-user-dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateUserDTO) {
    await this.emailExists(data.email);
    const salt = await bcrypt.genSalt();

    data.password = await bcrypt.hash(data.password, salt);

    if (data.height) data.height = Number(data.height);
    if (data.weight) data.weight = Number(data.weight);

    return await this.prisma.user.create({
      data,
    });
  }

  async list() {
    return await this.prisma.user.findMany();
  }

  async show(id: number) {
    await this.exists(id);

    return await this.prisma.user.findUnique({
      where: {
        id,
      },
    });
  }

  async update(
    id: number,
    { email, name, password, birthAt, role, height, weight }: UpdatePutUserDTO,
  ) {
    await this.exists(id);
    await this.emailExists(email);

    const salt = await bcrypt.genSalt();

    password = await bcrypt.hash(password, salt);

    return await this.prisma.user.update({
      data: {
        email,
        name,
        password,
        birthAt: birthAt ? new Date(birthAt) : null,
        role,
        height: Number(height),
        weight: Number(weight),
      },
      where: {
        id,
      },
    });
  }

  async updatePartial(
    id: number,
    {
      email,
      name,
      password,
      birthAt,
      role,
      height,
      weight,
    }: UpdatePatchUserDTO,
  ) {
    await this.exists(id);

    const data: any = {};

    if (birthAt) data.birthAt = new Date(birthAt);
    if (email) {
      await this.emailExists(email);
      data.email = email;
    }
    if (name) data.name = name;
    if (password) {
      const salt = await bcrypt.genSalt();

      data.password = await bcrypt.hash(password, salt);
    }
    if (role) data.role = role;
    if (height) data.height = Number(height);
    if (weight) data.weight = Number(weight);

    return await this.prisma.user.update({
      data,
      where: {
        id,
      },
    });
  }

  async delete(id: number) {
    await this.exists(id);
    return await this.prisma.user.delete({
      where: {
        id,
      },
    });
  }

  async exists(id: number) {
    if (
      !(await this.prisma.user.count({
        where: {
          id,
        },
      }))
    ) {
      throw new NotFoundException(`User ${id} does not exist!`);
    }
  }

  async emailExists(email: string) {
    if (
      await this.prisma.user.count({
        where: {
          email,
        },
      })
    ) {
      throw new BadRequestException(`E-mail already registered!`);
    }
  }
}
