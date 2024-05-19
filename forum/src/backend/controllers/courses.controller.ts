import { Controller, Get } from '@nestjs/common';
import { CoursesService } from '../services/courses.service';

@Controller('api/courses')
export class CoursesController {
    constructor(private readonly coursesService: CoursesService) {}

    @Get()
    async findAllCourses() {
        return this.coursesService.findAllCourses();
    }
}
