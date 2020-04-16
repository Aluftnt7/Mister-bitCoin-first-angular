import { User } from './../../app/models/user.model';
import { UserService } from 'src/services/user.service';
import { Subscription } from 'rxjs';
import { ContactService } from './../../services/contact.service';
import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contact.model';
import { ActivatedRoute, Route } from '@angular/router';



@Component({
  // tslint:disable-next-line: component-selector
  selector: 'contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit {
  constructor(private route: ActivatedRoute, private contactService: ContactService, private userService: UserService) { }
  // tslint:disable-next-line: no-output-on-prefix
  //  id = +this.route.snapshot.paramMap.get('id');
  currContact: Contact = null;
  contactSub: Subscription = undefined;
  loggedInUser: User = null;
  title: string = null;
  moveList = null;

  ngOnInit(): void {
    this.contactService.loadContacts()
     this.route.params.subscribe(params => {
       console.log(params._id);

       if (this.contactSub){
         this.contactSub.unsubscribe();
       }
       this.contactSub =  this.contactService.getContactById(params._id).subscribe(res => this.currContact = res);
    });

     this.loggedInUser = this.userService.getUser();
     this.title =  this.currContact.name;
     this.moveList = this.loggedInUser.moves;

  }

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnDestroy(): void {
    this.contactSub.unsubscribe();
  }


}
