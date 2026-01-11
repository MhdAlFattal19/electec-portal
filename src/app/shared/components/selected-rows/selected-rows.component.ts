import { animate, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-selected-rows',
  templateUrl: './selected-rows.component.html',
  styleUrls: ['./selected-rows.component.scss'],
  animations: [
    trigger(
      'inAnimation', 
      [
        transition(
          ':enter', 
          [
            style({  opacity: 0 }),
            animate('800ms', 
                    style({  opacity: 1 }))
          ]
        ),
      ]),
    
    ]
})


export class SelectedRowsComponent implements OnInit {

  allSelected: boolean = false;
  selection: string = "currentPage";
  firstRun: boolean = true;
  allSelectedChecked: boolean;

  @Input() totalRecords: number;
  @Input() currentPageSelectedRecords: number;
  @Input() sectionName: string;
  @Input() isFilterd: boolean;
  @Input() set isAllSelectedChecked(value: boolean) {
    if (this.firstRun) {
      this.firstRun = false;
    } else {
      if (!value) {
        this.reset();
      }
      this.allSelectedChecked = value;
    }
  }

  @Output() selectionCleared = new EventEmitter<boolean>();
  @Output() allSelectedEvent = new EventEmitter<boolean>();


  ngOnInit(): void {
  }

  selectAllRecords() {
    this.allSelected = true;
    this.selection = "all";
    this.allSelectedEvent.emit()
  }

  clearSelection() {
    this.selection = "currentPage";
    this.allSelected = false;
    this.selectionCleared.emit(true);
  }

  reset() {
    this.selection = "currentPage";
    this.allSelected = false;
  }

  getSelection(): string {
    return this.selection;
  }

}
