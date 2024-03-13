import { Injectable } from '@nestjs/common';
import {EntityManager, ObjectId} from 'typeorm';
import { Teachers } from '../entities/teachers.entity';

@Injectable()
export class TeachersRepository{
    constructor(private entityManager: EntityManager) {

    }

    async create(teacherData: Partial<Teachers>): Promise<Teachers>{
        return await this.entityManager.save(Teachers, teacherData);
    }

    async findById(id: number): Promise<Teachers | undefined>{
        return await this.entityManager.findOne(Teachers, { where: { id: new ObjectId(id) } });

    }

    async findAll(): Promise<Teachers[]>{
        return await this.entityManager.find(Teachers);

    }

    async update(id: number, teacherData: Partial<Teachers>): Promise<Teachers | undefined>{
        await this.entityManager.update(Teachers, id, teacherData);
        return await this.findById(id);

    }

    async delete(id: number): Promise<number>{
        const result = await this.entityManager.delete(Teachers, id);
        return result.affected;
    }


}