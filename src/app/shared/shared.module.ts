import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from './app-material/app-material.module';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
import { CategoryPipe } from './pipes/category.pipe';
import { StatusPipe } from './pipes/status.pipe';

@NgModule({
  declarations: [
    ErrorDialogComponent,
    CategoryPipe,
    StatusPipe,
  ],
  imports: [
    AppMaterialModule,
    CommonModule
  ],
  exports: [
    ErrorDialogComponent,
    CategoryPipe,
    StatusPipe
  ]
})
export class SharedModule { }
