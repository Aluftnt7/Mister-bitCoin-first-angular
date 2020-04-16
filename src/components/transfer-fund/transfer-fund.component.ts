import { User } from 'src/app/models/user.model';
import { UserService } from 'src/services/user.service';
import { Contact } from './../../app/models/contact.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'transfer-fund',
  templateUrl: './transfer-fund.component.html',
  styleUrls: ['./transfer-fund.component.scss']
})
export class TransferFundComponent implements OnInit {
  @Input() contact : Contact;
  loggedInUser: User = null;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.loggedInUser = this.userService.getUser()
  }
  onSubmit(val) {
  if(!val.amount || this.loggedInUser.coins < val.amount) return
  this.userService.addMove(this.contact, val.amount);
}


}
