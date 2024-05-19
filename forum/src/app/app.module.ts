import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import {CoursesService} from "../backend/services/courses.service";
import {TeachersService} from "../backend/services/teachers.service";
import {StudentsService} from "../backend/services/students.service";
import {StudentsRepository} from "../backend/repositories/students.repository";
import {TeachersRepository} from "../backend/repositories/teachers.repository";
import {CoursesRepository} from "../backend/repositories/courses.repository";
import { databaseConfig } from '../config';
import {CoursesController} from "../backend/controllers/courses.controller";
import {Courses} from "../backend/entities/courses.entity";



@Module({
  imports: [TypeOrmModule.forRoot({ type: 'mongodb',
    url:databaseConfig.mongoUri,
    database: databaseConfig.dbName,entities: [Courses],}), TypeOrmModule.forFeature([CoursesRepository, TeachersRepository, StudentsRepository]),],

  controllers: [AppController,CoursesController],
  providers: [AppService,CoursesService,CoursesRepository],
})
export class AppModule {}
