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

    async findById(id: number): Promise<Courses | undefined>{
        return await this.entityManager.findOne(Courses, { where: { id: new ObjectId(id) } });

    }

    async findAll():Promise<Courses[]>{
        return await this.entityManager.find(Courses);

    }

    async update(id: number, courseData: Partial<Courses>): Promise<Courses>{
        await this.entityManager.update(Courses, id, courseData)
        return await this.findById(id);

    }

    async delete(id: number): Promise<number>{
        const result = await this.entityManager.delete(Courses, id);
        return result.affected
    }


}