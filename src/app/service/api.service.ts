import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { PeriodicTableElement } from '../interface/periodic-table-element';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  get(): Observable<PeriodicTableElement[]> {
    return this.http.get<PeriodicTableElement[]>("https://periodic-table-elements-info.herokuapp.com/elements");
  }
}
