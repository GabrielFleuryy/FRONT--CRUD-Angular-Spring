import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HouseFormComponent } from './house-form/house-form.component';
import { HousesComponent } from './houses/houses.component';

const routes: Routes = [
  { path: '', component: HousesComponent },
  { path: 'new', component: HouseFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HousesRoutingModule { }
