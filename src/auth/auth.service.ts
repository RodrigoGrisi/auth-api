/* eslint-disable prettier/prettier */
import { Injectable, UnauthorizedException } from '@nestjs/common';
import {  SignInDto,SignUpDto } from './dtos/auth';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AuthService {

  constructor(private prismaService: PrismaService) { }

  async signup(data: SignUpDto) {

    const userAlreadyExist = await this.prismaService.user.findUnique({
      where: {
        email: data.email,
      },
    });

    if (userAlreadyExist) {
      throw new UnauthorizedException('User already exist');
    }

    const user = await this.prismaService.user.create({ data });

    return {
      id: user.id,
      name: user.name,
      email: user.email,
    };
  }

  async signin(data: SignInDto) {
    return data;
  }
}
