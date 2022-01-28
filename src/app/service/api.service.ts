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
    return this.http.get<PeriodicTableElement[]>("http://127.0.0.1:5000/api/elements");
  }
}
