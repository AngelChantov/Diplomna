import {Controller, Post, Body, HttpCode, HttpStatus} from '@nestjs/common';
import { AuthService } from '../services/auth.service';
import { LoginDto, RegisterDto } from '../dtos/auth.dto';

@Controller('auth')
export class AuthController{
    constructor(private readonly authService: AuthService) {

    }
    @HttpCode(HttpStatus.OK)
    @Post('login')
    login(@Body()loginDTo)
}