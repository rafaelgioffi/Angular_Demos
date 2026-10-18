import { Component, OnInit } from '@angular/core';

import { Course } from '../model/course';
import { CoursesService } from '../services/courses.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses$: Observable<Course[]>;
  displayedColumns = ['name', 'category'];

  //coursesService: CoursesService;

  constructor(private coursesService: CoursesService) {
    //this.courses = [];

    // Pode declarar o serviço diretamente aqui no construtor
    this.courses$ = this.coursesService.listCourses();
  }

  ngOnInit(): void {
    // Não pode mais no ngOnInit por conta do strict das configurações.
  }

}
