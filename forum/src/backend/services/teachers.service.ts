import { Injectable } from '@nestjs/common';
import { TeachersRepository } from '../repositories/teachers.repository';
import { Teachers } from '../entities/teachers.entity'

@Injectable()
export class TeachersService{
    constructor(private readonly teachersRepository: TeachersRepository){

    }

    async createTeacher(teacherData: Partial<Teachers>): Promise<Teachers>{
        return this.teachersRepository.create(teacherData);
    }

    async findTeacherById(id: number): Promise<Teachers | undefined> {
        return this.teachersRepository.findById(id);

    }

    async findAllTeachers(): Promise<Teachers[]>{
        return this.teachersRepository.findAll();

    }

    async updateTeacher(id: number, teacherData: Partial<Teachers>): Promise<Teachers>{
        return this.teachersRepository.update(id, teacherData);

    }

    async deleteTeacher(id: number): Promise<number>{
        return this.teachersRepository.delete(id);

    }
}
