import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
  useFactory: (http: HttpClient) => new CoursesService(http),
  deps: [HttpClient]
})
export class CoursesService {
  private apiUrl = 'http://localhost:3000/api/courses'; // replace with your API URL

  constructor(private http: HttpClient) { }

  getCourses(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);

  }

}



