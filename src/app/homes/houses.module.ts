import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';
import { HousesRoutingModule } from './houses-routing.module';
import { HousesComponent } from './houses/houses.component';
import { HouseFormComponent } from './house-form/house-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HousesListComponent } from './houses-list/houses-list.component';


@NgModule({
  declarations: [
    HousesComponent,
    HouseFormComponent,
    HousesListComponent
  ],
  imports: [
    CommonModule,
    HousesRoutingModule,
    AppMaterialModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class HousesModule { }
