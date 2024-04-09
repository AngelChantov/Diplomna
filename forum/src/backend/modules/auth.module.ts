import { Module } from '@nestjs/common';
import { AuthService } from '../services/auth.service';
import { JwtModule } from '@nestjs/jwt';
import { StudentsModule } from './students.module';
import {AuthController} from "../controllers/auth.controller";
import {jwtConstants} from "../constants";

@Module({
    imports: [
        StudentsModule,
        JwtModule.register({
            global:true,
            secret: jwtConstants.secret,
            signOptions: { expiresIn: '1h' },
        }),
    ],
    providers: [AuthService],
    exports: [AuthService,AuthController],
})
export class AuthModule {}