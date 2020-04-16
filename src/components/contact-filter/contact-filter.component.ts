import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'contact-filter',
  templateUrl: './contact-filter.component.html',
  styleUrls: ['./contact-filter.component.scss']
})
export class ContactFilterComponent implements OnInit {
  @Input() filterBy ;
  filterByCopy = {term: null};
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onFilter = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
    console.log('filter onInit',this.filterBy );

    this.filterByCopy = { ...this.filterBy }
  }
  onInput() {
    this.onFilter.emit(this.filterByCopy);
  }


}
