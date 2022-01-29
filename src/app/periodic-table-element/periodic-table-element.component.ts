import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { PeriodicTableElement } from '../interface/periodic-table-element';

@Component({
  selector: 'app-periodic-table-element',
  templateUrl: './periodic-table-element.component.html',
  styleUrls: ['./periodic-table-element.component.scss']
})
export class PeriodicTableElementComponent implements OnInit {
  @Input() element!: PeriodicTableElement;
  @Output() selectedElementType = new EventEmitter<PeriodicTableElement>();
  @Output() selectedElementBool = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  onMouseOver(selectedElement: PeriodicTableElement) {
    this.selectedElementType.emit(selectedElement);
  }
  
  onMouseLeave() {
    this.selectedElementType.emit(undefined);
  }

  onMouseClick() {
    this.selectedElementBool.emit(true);
  }
}
