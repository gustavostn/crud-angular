import { Course } from './../models/course';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses: Course[] = [
    {id: 0, name: 'Angular', category: 'Front End'}
  ];
  displayedColumns = ['id', 'name', 'category']

  constructor() { }

  ngOnInit(): void {
  }

}
