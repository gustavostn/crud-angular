import { MatSnackBar } from '@angular/material/snack-bar';
import { CoursesService } from './../services/courses.service';
import { Course } from './../models/course';
import { Component, ElementRef, OnInit } from '@angular/core';
import { Observable, catchError } from 'rxjs';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses$: Observable<Course[]>;
  displayedColumns = ['id', 'name', 'category']

  constructor(private coursesService: CoursesService, private _snackBar: MatSnackBar) {
    this.courses$ = this.coursesService.getAllCourses().pipe(
      catchError(_ => {
        this.openSnackBar('Ocorreu um erro ao buscar a lista de cursos.')
        return []
      })
    )
  }

  ngOnInit(): void { }

  openSnackBar(errorMsg: string) {
    this._snackBar.open(errorMsg, "", {
      horizontalPosition: 'right',
      verticalPosition: 'bottom',
      duration: 5000
    });

  }
}
