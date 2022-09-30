import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';

import { House } from '../model/House';
import { ErrorDialogComponent } from '../../shared/components/error-dialog/error-dialog.component';
import { HousesService } from '../services/houses.service';

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.scss']
})
export class HousesComponent implements OnInit {

  houses$: Observable<House[]>;

  constructor(
    private housesService: HousesService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute) {

    this.houses$ = housesService.list()
    .pipe(
      catchError(error => {
        this.onError('Erro ao buscar casas');
        return of([])
      })
    );
  }

  onError(errMsg: string){
      this.dialog.open(ErrorDialogComponent, {
        data: errMsg
      });

  }

  ngOnInit(): void {
  }

  onAdd(){
    this.router.navigate(['new'], {relativeTo: this.route})
  }

}
