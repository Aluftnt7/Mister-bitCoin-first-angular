import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Contact } from 'src/app/models/contact.model';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onGoBack = new EventEmitter<void>();
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onSetingFilter = new EventEmitter<void>();
  @Input() contacts: Contact[];
  @Input() filterBy: any = {term: null};

  currContact: Contact = null;

  setCurrContact(ev){
    this.currContact = ev;
  }

  constructor() { }
  onFilterHandler(filterBy) {
    this.onSetingFilter.emit(filterBy)
  }
  ngOnInit(): void {

  }

}
