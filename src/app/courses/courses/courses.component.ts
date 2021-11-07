import { CoursesService } from './../services/courses.service';
import { Course } from './../models/course';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses: Observable<Course[]>;
  displayedColumns = ['id', 'name', 'category']

  constructor(private coursesService: CoursesService) { 
    this.courses = this.coursesService.getAllCourses()
  }

  ngOnInit(): void { }

  
}
