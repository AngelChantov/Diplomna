import { Injectable } from '@nestjs/common';
import {EntityManager, ObjectId} from 'typeorm';
import { Courses } from '../entities/courses.entity';

@Injectable()
export class CoursesRepository{
    constructor(private entityManager: EntityManager) {

    }

    async create(courseData: Partial<Courses>): Promise<Courses>{
        return await this.entityManager.save(Courses, courseData);

    }

    async findById(id: number): Promise<Courses | undefined> {
        const course = await this.entityManager.findOne(Courses, { where: { id: new ObjectId(id) } });
        return course ?? undefined;
    }

    async findAll():Promise<Courses[]>{
        return await this.entityManager.find(Courses);

    }

    async update(id: number, courseData: Partial<Courses>): Promise<Courses>{
        await this.entityManager.update(Courses, id, courseData);
        const updatedCourse = await this.findById(id);
        if (!updatedCourse) {
            throw new Error(`Course with id ${id} not found`);
        }
        return updatedCourse;
    }

    async delete(id: number): Promise<number>{
        const result = await this.entityManager.delete(Courses, id);
        if (!result.affected) {
            throw new Error(`No course with id ${id} was found to delete`);
        }
        return result.affected;
    }


}