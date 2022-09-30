import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NonNullableFormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { HousesService } from './../services/houses.service';

@Component({
  selector: 'app-house-form',
  templateUrl: './house-form.component.html',
  styleUrls: ['./house-form.component.scss']
})
export class HouseFormComponent implements OnInit {

  form = this.formBuilder.group({
    name: [''],
    category: ['']
  });

  constructor(
    private formBuilder: NonNullableFormBuilder,
    private service: HousesService,
    private snackBar: MatSnackBar,
    private location: Location) {

    //this.form
   }

  ngOnInit(): void {
  }


  onSubmit(){
    this.service.save(this.form.value).subscribe(result => this.onSuccess(), error => this.onError());
  }

  onCancel(){
    this.location.back();
  }

  private onSuccess(){
    this.snackBar.open('Anúncio salvo com sucesso!', 'Fechar', {  duration: 3000 });
    this.onCancel();
  }

  private onError(){
    this.snackBar.open('Erro ao salvar anúncio', 'Fechar', {  duration: 3000 });
  }

}
