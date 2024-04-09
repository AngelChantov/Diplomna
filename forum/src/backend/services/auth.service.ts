import {Injectable, UnauthorizedException} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { StudentsRepository} from "../repositories/students.repository";
import { Students } from "../entities/students.entity";
import {StudentsService} from "./students.service";

@Injectable()
export class AuthService {
    constructor(
        private studentsService: StudentsService,
        private jwtService: JwtService
    ) {
    }

    async logIn(name: string, pass: string,): Promise<{access_token: string}>{
        const student = await this.studentsService.findOne(name);
        if (student?.password !== pass){
            throw new UnauthorizedException("wrong password or name");

        }
        const payload = {sub: student.id, name : student.studentName};
        return {
            access_token: await this.jwtService.signAsync(payload),
        };
}
}
