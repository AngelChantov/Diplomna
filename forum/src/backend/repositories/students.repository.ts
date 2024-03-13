import { Injectable } from '@nestjs/common';
import {EntityManager, ObjectId} from 'typeorm';
import { Students } from '../entities/students.entity';


@Injectable()
export class StudentsRepository{
    constructor(private entityManager:EntityManager) {

    }

    async create(studentData: Partial<Students>): Promise<Students>{
        return await this.entityManager.save(Students, studentData);

    }

    async findById(id: number): Promise<Students | undefined>{
        return await this.entityManager.findOne(Students, { where: { id: new ObjectId(id) } });
    }

    async findAll(): Promise<Students[]>{
        return await this.entityManager.find(Students);

    }
    async findByName(studentName: string): Promise<Students | undefined> {
        return await this.entityManager.findOne(Students, {where:{studentName}});
    }

    async update(id: number, studentData: Partial<Students>): Promise<Students>{
        await this.entityManager.update(Students, id, studentData);
        return await this.findById(id);
    }

    async delete(id: number): Promise<number>{
        const result = await this.entityManager.delete(Students, id);
        return result.affected;
    }

}