import {AfterViewInit, Component, OnInit} from '@angular/core';
import {CoursesService} from "../../../../../forum/src/backend/services/courses.service";
import {FormsModule} from "@angular/forms";
import {RouterOutlet} from "@angular/router";
import {initFlowbite} from "flowbite";



@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [RouterOutlet,
    FormsModule
  ],
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit, AfterViewInit{

  courses: any[] = [];
  newCourse = { courseName: '', courseTeacher: '', courseCode: '' };

  constructor(private coursesService: CoursesService) { }

  ngOnInit(): void {
    this.loadCourses();
  }

  loadCourses(): void {
    this.coursesService.findAllCourses().then(courses => {
      this.courses = courses;
    });
  }

  addCourse(): void {
    this.coursesService.createCourse(this.newCourse).then(() => {
      this.loadCourses();
    });
  }

  deleteCourse(id: number): void {
    this.coursesService.deleteCourse(id).then(() => {
      this.loadCourses();
    });
  }  ngAfterViewInit() {
    if (typeof document !== 'undefined') {
      initFlowbite();
    }
  }
}
