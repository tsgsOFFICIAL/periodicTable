import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { PeriodicTableElement } from '../interface/periodic-table-element';

@Component({
  selector: 'app-periodic-table',
  templateUrl: './periodic-table.component.html',
  styleUrls: ['./periodic-table.component.scss']
})
export class PeriodicTableComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  elements: PeriodicTableElement[] = [];
  
  ngOnInit(): void {
    this.apiService.get().subscribe((elements: PeriodicTableElement[]) => {
      next: this.elements = elements;
      complete: if (this.elements.length >= 1) {
        // console.log(`We're ready for take-off!`);
        // console.log(this.elements[0]);
        console.log(this.elements[4]);
      }
    });
  }

}
