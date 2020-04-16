import { Contact } from './../../app/models/contact.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'contact-preview',
  templateUrl: './contact-preview.component.html',
  styleUrls: ['./contact-preview.component.scss'],
})
export class ContactPreviewComponent implements OnInit {

  @Input() contact: Contact;
  // currContact: Contact = null;


  constructor() { }


  ngOnInit(): void {
  }

}
