import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Idea } from './models/idea.model';
import { IdeaDetail } from './models/idea-detail.model';

@Injectable()
export class IdeaService {
  private baseUrl = 'http://localhost:8000/api/';

  constructor(private http: Http) { }

  getAllIdeas$(): Observable<Idea[]> {
    return this.http
      .get(`${this.baseUrl}ideas`)
      .map(this.handleSuccess)
      .catch(this.handleError);
  }

  getIdea$(id: number): Observable<IdeaDetail> {
    return this.http
      .get(`${this.baseUrl}idea/${id}`)
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
