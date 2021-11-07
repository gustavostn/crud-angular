import { Course } from './../models/course';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses: Course[] = [
    {id: 0, name: 'Angular', category: 'Front End'},
    {id: 2, name: 'React', category: 'Front End'},
    {id: 3, name: 'VUE', category: 'Front End'},
    {id: 4, name: 'Java', category: 'Back End'},
    {id: 5, name: 'Kotlin', category: 'Back End'},
    {id: 6, name: 'NodeJs', category: 'Back End'},
  ];
  displayedColumns = ['id', 'name', 'category']

  constructor() { }

  ngOnInit(): void {
  }

}
