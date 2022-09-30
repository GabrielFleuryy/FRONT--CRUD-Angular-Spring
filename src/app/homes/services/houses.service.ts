import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

import { House } from '../model/House';
import { delay, first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HousesService {

  private readonly API = 'api/houses';

  constructor(private httpclient: HttpClient) {  }

  list() {
    return this.httpclient.get<House[]>(this.API)
    .pipe(
      first(),
      delay(5000),
      tap(houses => console.log(houses))
    );
  }

  save(house: Partial<House>){
    house.status = 'ativo';
    return this.httpclient.post<House>(this.API, house).pipe(first())
  }

}
