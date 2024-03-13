import {Injectable, UnauthorizedException} from '@nestjs/common';

import { StudentsRepository} from "../repositories/students.repository";
import { Students } from "../entities/students.entity";

@Injectable()
export class AuthService{
    constructor(private readonly studentsRepository: StudentsRepository) {

    }
    async login(name: string, pass: string): Promise<Students>{
        const student = await this.studentsRepository.findByName(name);
        if(student.password !== pass) {
            throw new UnauthorizedException("Wrong password");

        }

        return

    }

}