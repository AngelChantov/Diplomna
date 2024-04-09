import { Module } from '@nestjs/common';
//import { StudentsController } from '../controllers/students.controller';
import { StudentsService } from '../services/students.service';
import { StudentsRepository } from '../repositories/students.repository';

@Module({
    controllers: [],
    providers: [StudentsService, StudentsRepository],
    exports: [StudentsService,StudentsRepository],
})
export class StudentsModule {}