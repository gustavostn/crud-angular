import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private readonly API = '/assets/mocks/mock-get-all-courses.json';

  constructor(private htppClient: HttpClient) { }

  getAllCourses() {
    return this.htppClient.get<any>(this.API).pipe(
      first(),
      delay(3000),
      tap(response => console.log(response) )
    );
  }
 
}
