import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { PeriodicTableElement } from '../interface/periodic-table-element';

@Component({
  selector: 'app-periodic-table-element',
  templateUrl: './periodic-table-element.component.html',
  styleUrls: ['./periodic-table-element.component.scss']
})
export class PeriodicTableElementComponent implements OnInit {
  @Input() element!: PeriodicTableElement;
  @Output() selectedElementType = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onMouseOver(selectedElementType: string) {
    this.selectedElementType.emit(selectedElementType);
  }
  
}
