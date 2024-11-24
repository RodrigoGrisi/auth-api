/* eslint-disable prettier/prettier */
import { Body, Controller, Post } from '@nestjs/common';
import { SignInDto, SignUpDto } from './dtos/auth';


@Controller('auth')
export class AuthController {
    
    // POST /auth/signin
    @Post('signin')
    async signIn(@Body() body: SignInDto) {
        console.log({ body });

        return { message: { email : body.email, sucess: true } };
    }
    
    // POST /auth/signup
    @Post('signup')
    async signUp(@Body() body: SignUpDto) {
        console.log({ body });

        return { message: { name : body.name, email : body.email, sucess: true } };
    }
}
