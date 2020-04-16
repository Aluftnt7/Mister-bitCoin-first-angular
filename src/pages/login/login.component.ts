import { User } from './../../app/models/user.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  userName: string = null;
  loggedInUser: User = null;
  constructor(
    private router: Router,
    private userService: UserService

    ) {}

  ngOnInit(): void {
   this.loggedInUser =  this.userService.getUser()
  }


  onSubmit() {
    this.userService.signUp(this.userName)
    this.router.navigate([`/Home`]);
  }
}
