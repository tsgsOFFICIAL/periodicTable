import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { PeriodicTableElement } from '../interface/periodic-table-element';

@Component({
  selector: 'app-periodic-table',
  templateUrl: './periodic-table.component.html',
  styleUrls: ['./periodic-table.component.scss']
})
export class PeriodicTableComponent implements OnInit {
  elements: PeriodicTableElement[] = [];
  selectedElementType: string = "";

  constructor(private apiService: ApiService) { }
  
  ngOnInit(): void {
    this.apiService.get().subscribe((elements: PeriodicTableElement[]) => {
      next: this.elements = elements;
      complete: if (this.elements.length >= 1) {
        // console.log(`We're ready for take-off!`);
        // console.log(this.elements[0]);
        // console.log(this.elements[4]);
      }
    });
  }

  onSelectedElementTypeChange(elementType: string) {
    this.selectedElementType = elementType;
  }
  // nonmetal
  // alkali metal
  // alkaline earth metal
  // actinoid
  // lanthanoid
  // transition metal
  // metal
  // metalloid
  // halogen
  // noble gas
}
