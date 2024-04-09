import { Module } from '@nestjs/common';
//import { TtudentsController } from '../controllers/students.controller';
import { TeachersService } from '../services/teachers.service';
import { TeachersRepository } from '../repositories/teachers.repository';

@Module({
    controllers: [],
    providers: [TeachersService, TeachersRepository],
    exports: [TeachersService,TeachersRepository],
})
export class StudentsModule {}