import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private readonly API = '/assets/mocks/mock-get-all-courses.json';

  constructor(private htppClient: HttpClient) { }

  getAllCourses() {
    return this.htppClient.get<any>(this.API).pipe(
      first(),
      tap(response => console.log(response) )
    );
  }
 
}
