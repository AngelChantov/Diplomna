import { Injectable } from '@nestjs/common';
import { CoursesRepository } from '../repositories/courses.repository';
import { Courses } from '../entities/courses.entity'
import {Observable} from "rxjs";

@Injectable()
export class CoursesService{
    constructor(private readonly coursesRepository: CoursesRepository) {

    }

    async createCourse(courseData: Partial<Courses>): Promise<Courses>{
        return this.coursesRepository.create(courseData);

    }

    async findCourseById(id: number): Promise<Courses>{
        const course = await this.coursesRepository.findById(id);
        if (!course) {
            throw new Error(`Course with id ${id} not found`);
        }
        return course;
    }

    async findAllCourses():Promise<Courses[]>{
        return this.coursesRepository.findAll();

    }

    async updateCourse(id: number, courseData: Partial<Courses>): Promise<Courses>{
        return this.coursesRepository.update(id, courseData);

    }

    async deleteCourse(id: number): Promise<number>{
        return this.coursesRepository.delete(id);

    }
}