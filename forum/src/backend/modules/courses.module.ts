import { Module } from '@nestjs/common';
//import { StudentsController } from '../controllers/students.controller';
import { CoursesService } from '../services/courses.service';
import { CoursesRepository } from '../repositories/courses.repository';

@Module({
    controllers: [],
    providers: [CoursesService, CoursesRepository],
    exports: [CoursesService,CoursesRepository],
})
export class StudentsModule {}