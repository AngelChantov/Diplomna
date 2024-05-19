import {AfterViewInit, Component} from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {initFlowbite} from "flowbite";
import {CoursesService} from "../courses.service";
import {CommonModule} from "@angular/common";
import { HttpClientModule, } from '@angular/common/http';

@Component({
  imports: [RouterOutlet, CommonModule, HttpClientModule,],
  providers: [CoursesService,],
  selector: 'app-about-us',
  standalone: true,
  styleUrl: './about-us.component.css',
  templateUrl: './about-us.component.html'
})
export class AboutUsComponent implements AfterViewInit {


  ngAfterViewInit() {
    if (typeof document !== 'undefined') {
      initFlowbite();
    }
  }
  courses: any[]= [];

  constructor(private coursesService: CoursesService) { }

  ngOnInit(): void {
    this.coursesService.getCourses().subscribe(courses => {
      this.courses = courses;
    });
  }
}

