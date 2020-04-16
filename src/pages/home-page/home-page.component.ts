import { User } from './../../app/models/user.model';
import { BitcoinService } from './../../services/bitcoin.service';
import { Contact } from './../../app/models/contact.model';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { UserService } from 'src/services/user.service';
import { Subscription } from 'rxjs';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  // tslint:disable-next-line: align
  user: User;
  // tslint:disable-next-line: ban-types
  rate: Promise <any>;
  rateAsNum: any = null
  BitcoinService: any;
  moveList = null;
  get coinsToDollar(){
    return this.user.coins / this.rateAsNum;
    }



  // tslint:disable-next-line: no-shadowed-variable
  constructor(private userService: UserService ,private bitcoinService: BitcoinService){
    }

    ngOnInit(): void {
      this.user = this.userService.getUser();
      this.moveList = this.user.moves;
      this.getRate()
    }
    async getRate(){
      const prm = await this.bitcoinService.getRate()
      this.rate = prm
      this.rateAsNum = this.rate
    }


}
