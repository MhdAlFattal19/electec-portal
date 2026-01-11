import { Component, Input, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { AccordionGroup, AccordionCheckBoxModel, AccordionCheckBoxesReturnObject } from '../../models/shared-models';

@Component({
  selector: 'accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements OnInit {

  @ViewChild('item', { static: true }) accordion;


  @Input()
  private isParentCheckBoxChanged: EventEmitter<boolean>;

  @Input()
  accordionGroup: AccordionGroup

  @Input()
  accordionId: number

  checkBoxSelectedCount: number;
  masterSelected: boolean;
  checklist: any = [];
  checkedList: any;

  @Output()
  listToReturn: EventEmitter<AccordionCheckBoxesReturnObject> = new EventEmitter<AccordionCheckBoxesReturnObject>();

  constructor() {
    this.masterSelected = false;
  }

  toggle() {
    this.accordion.toggle();
  }

  ngOnInit() {
    this.accordionGroup.checkBoxList.forEach((item) => {
      let activity: AccordionCheckBoxModel = item;
      this.checklist.push({
        id: activity.id,
        isSelected: activity.isSelected,
        name : activity.name
      });
    });
    this.isParentCheckBoxChanged.subscribe(data => {
      this.masterSelected = data;
      this.checkUncheckAll();
    });

    this.isAllSelected(false);
    this.checkBoxSelectedCount = this.accordionGroup.assignedCount;
  }

  checkUncheckAll() {
    for (var i = 0; i < this.checklist.length; i++) {
      this.checklist[i].isSelected = this.masterSelected;
    }
    this.getCheckedItemList(true);
  }
  isAllSelected(returnDataToParent: boolean) {
    this.masterSelected = this.checklist.every(function (item: any) {
      return item.isSelected == true;
    })
    this.getCheckedItemList(returnDataToParent);
  }

  getCheckedItemList(returnDataToParent: boolean) {
    this.checkedList = [];
    this.checkBoxSelectedCount = 0;
    for (var i = 0; i < this.checklist.length; i++) {
      if (this.checklist[i].isSelected) {
        this.checkedList.push(this.checklist[i]);
        this.checkBoxSelectedCount = this.checkBoxSelectedCount + 1;
      }
    }

    if (this.accordionGroup != null && returnDataToParent) {
      let x = new AccordionCheckBoxesReturnObject(
        this.accordionGroup.categoryName,
        this.checkedList
      );
      this.listToReturn.emit(x)
    }
  }

  changeClass(id: string) {
    var imgId = "#img_" + id;
    var classList = $(imgId).attr("class");

    if (classList == "fas fa-caret-right") {
      $(imgId).removeClass("fas fa-caret-right");
      $(imgId).addClass("fas fa-caret-down");
    }
    else {
      $(imgId).removeClass("fas fa-caret-down");
      $(imgId).addClass("fas fa-caret-right");
    }
  }
}