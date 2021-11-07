import { Course } from './../models/course';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private htppClient: HttpClient) { }

  getAllCourses(): Course[] {
    return [
      {id: 0, name: 'Angular', category: 'Front End'},
      {id: 2, name: 'React', category: 'Front End'},
      {id: 3, name: 'VUE', category: 'Front End'},
      {id: 4, name: 'Java', category: 'Back End'},
      {id: 5, name: 'Kotlin', category: 'Back End'},
      {id: 6, name: 'NodeJs', category: 'Back End'},
    ];
  }
}
