/* eslint-disable prettier/prettier */
import { Body, Controller, Post } from '@nestjs/common';
import { SignInDto, SignUpDto } from './dtos/auth';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {

  constructor(private authService: AuthService) { }

  // POST /auth/signup
  @Post('signup')
  async signUp(@Body() body: SignUpDto) {
    return this.authService.signup(body);
  }

  // POST /auth/signin
  @Post('signint')
  async signIn(@Body() body: SignInDto) {

    await this.authService.signin(body);
    return { message: { email: body.email, sucess: true } };
  }



}
