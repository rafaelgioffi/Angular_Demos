import { Injectable } from '@angular/core';
import { Course } from '../model/course';
import { HttpClient } from '@angular/common/http';
import { delay, first, tap } from 'rxjs/operators';

//Informa ao Angular para fornecer automaticamente a instância...
@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private readonly API = '/assets/courses.json';

  //injeção de dependência...
  constructor(private httpClient: HttpClient) { }

  listCourses() {
    return this.httpClient.get<Course[]>(this.API)
    //pipe é um tunelamento dos dados. serve para manipular e transformar os dados.
    .pipe(
      first(), //pega o primeiro valor emitido e completa a stream
      delay(1000),
      tap(courses => console.log(courses))
    );
  }
}
