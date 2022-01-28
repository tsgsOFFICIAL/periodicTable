import { Component, Input, OnInit } from '@angular/core';
import { PeriodicTableElement } from '../interface/periodic-table-element';

@Component({
  selector: 'app-periodic-table-element',
  templateUrl: './periodic-table-element.component.html',
  styleUrls: ['./periodic-table-element.component.scss']
})
export class PeriodicTableElementComponent implements OnInit {
  @Input() element!: PeriodicTableElement;

  constructor() { }

  ngOnInit(): void {
  }

}
