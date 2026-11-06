import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, NonNullableFormBuilder, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss'],
})
export class CourseFormComponent implements OnInit {

  form = this.formBuilder.group({
    name: [''],
    category: [''],
  });

  constructor(
    private formBuilder: NonNullableFormBuilder,
    private service: CoursesService,
    private snackBar: MatSnackBar,
    private location: Location
  ) {
  }

  ngOnInit(): void {
    // TODO document why this method 'ngOnInit' is empty
    //this.form.value.name = null; //Não pode iniciar com Null ou números e etc, somente com string...
  }

  onSubmit() {
    this.service.save(this.form.value).subscribe(
      result => this.onSuccess(),
      error => this.onError(),
    );
  }

  onSuccess() {
    this.snackBar.open('Curso salvo com sucesso!', 'Fechar', { duration: 5000 });
    this.onCancel();
  }

  onCancel() {
    this.location.back();
  }

  private onError() {
    this.snackBar.open('Erro ao salvar curso...', 'Fechar', { duration: 5000 });
  }
}
