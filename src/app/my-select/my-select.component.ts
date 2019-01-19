import { Component, OnInit, ViewEncapsulation, ViewChildren, ElementRef, QueryList, ContentChildren, AfterContentInit } from '@angular/core';
import { MyOptionComponent } from '../my-option/my-option.component';

@Component({
  selector: 'app-my-select',
  templateUrl: './my-select.component.html',
  styleUrls: ['./my-select.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class MySelectComponent implements OnInit, AfterContentInit {

  @ContentChildren(MyOptionComponent)
  itemsList: QueryList<MyOptionComponent>;

  items = [];

  constructor() { }

  ngOnInit() {
    console.debug('ngOnInit');
  }

  ngAfterContentInit() {
    console.debug('ngAfterContentInit');
    const children = this.itemsList.toArray();
    this.items = children.map(o => ({value: o['value'], viewValue: o['text']}));
  }  

  slotChange($event) {
    console.debug('slotChange', $event);
    const assigned: Node[] = $event.target.assignedNodes();
    const options = assigned.filter(f => f.nodeName === 'MY-OPTION');
    //const options = assigned.filter(f => f.nodeName === 'APP-MY-OPTION');
    this.items = options.map(o => ({value: o['value'], viewValue: o['text']}))
    console.debug('slotChange', this.items);
  }

}
