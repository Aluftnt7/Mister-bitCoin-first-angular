import { ContactService } from './../services/contact.service';
import { Contact } from './models/contact.model';
import { Component, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor() {
  }
  ngOnInit(){
  }
}
