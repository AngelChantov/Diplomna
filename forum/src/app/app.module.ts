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
import {AuthController} from "../backend/controllers/auth.controller";
import { databaseConfig } from '../config';

@Module({
  imports: [TypeOrmModule.forRoot({ type: 'mongodb',
    url: databaseConfig.mongoUri,
    database: databaseConfig.dbName,}), TypeOrmModule.forFeature([CoursesRepository, TeachersRepository, StudentsRepository]),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
