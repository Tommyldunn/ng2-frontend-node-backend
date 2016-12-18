import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Item } from './models/item.model';
import { ItemDetail } from './models/item-detail.model';

@Injectable()
export class DinosService {
  private baseUrl = 'http://localhost:8000/api/';

  constructor(private http: Http) { }

  getAllItems$(): Observable<Item[]> {
    return this.http
      .get(`${this.baseUrl}items`)
      .map(this.handleSuccess)
      .catch(this.handleError);
  }

  getItem$(id: number): Observable<ItemDetail> {
    return this.http
      .get(`${this.baseUrl}item/${id}`)
      .map(this.handleSuccess)
      .catch(this.handleError);
  }

  private handleSuccess(res: Response) {
    return res.json();
  }

  private handleError(err: Response | any) {
    let errorMsg = err.message || 'Unable to retrieve data';
    return Observable.throw(errorMsg);
  }

}
