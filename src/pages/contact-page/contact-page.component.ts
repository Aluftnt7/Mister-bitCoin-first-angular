import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { ContactService } from 'src/services/contact.service';
import { Contact } from 'src/app/models/contact.model';
import { Router } from '@angular/router';

@Component({
  selector: 'contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit, OnDestroy {
  subscription: any;
  contacts: Contact[] = [];
  filterBy = { term: null }
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onSetingFilter = new EventEmitter<void>();



  constructor(private contactService: ContactService, private router: Router,
    ) {

    this.subscription = this.contactService.contacts$.subscribe((contacts) => {
      this.contacts = [...contacts];
    });
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }


  onFilterHandler(newFilter){
    this.filterBy = newFilter;
    this.contactService.loadContacts(this.filterBy);
  }

  onEnter(){
    if(this.contacts.length === 1){
      let _id = this.contacts[0]._id
      this.router.navigate([`/Contact/${_id}`]);
    }
  }

  ngOnInit(): void {
    this.contactService.loadContacts(this.filterBy);
  }

}
