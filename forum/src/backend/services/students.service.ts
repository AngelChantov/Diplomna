import { Injectable } from '@nestjs/common';
import { StudentsRepository } from '../repositories/students.repository';
import { Students } from '../entities/students.entity'



@Injectable()
export class StudentsService{
    constructor(private readonly studentsRepository: StudentsRepository) {

    }

    async createStudent(studentData:Partial<Students>): Promise<Students>{
        return this.studentsRepository.create(studentData);

    }

    async findStudentById(id: number): Promise<Students>{
        return this.studentsRepository.findById(id);

    }

    async findAllStudents(): Promise<Students[]>{
        return this.studentsRepository.findAll();

    }
    async findOne(name: string): Promise<Students | undefined> {
        return this.studentsRepository.findByName(name);
    }

    async updateStudent(id: number, studentData: Partial<Students>): Promise<Students>{
        return this.studentsRepository.update(id, studentData);

    }

    async deleteStudent(id: number): Promise<number>{
        return this.studentsRepository.delete(id);

    }
}