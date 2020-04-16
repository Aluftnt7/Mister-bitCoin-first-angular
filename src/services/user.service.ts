import { Move } from './../app/models/move.model';
import { StorageService } from './storage.service';
import { Injectable, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private storageService: StorageService) {}

  loggedInUser = { name: 'Bob rasta', coins: 100, moves: [] };
  key = 'loggedinUser';
  // tslint:disable-next-line: variable-name
  private _movesWithContact = [];
  // tslint:disable-next-line: variable-name
  private _movesWithContact$ = new BehaviorSubject<any[]>([]);
  // tslint:disable-next-line: variable-name
  public movesWithContact$ = this._movesWithContact$.asObservable();

  private _lastContact: string;

  public getUser(): User {
    this.loggedInUser = this.storageService.load(this.key);
    return !this.loggedInUser ? null : this.loggedInUser;
  }
  public addMove(contact, amount) {
    let move: Move = {
      toId: contact._id,
      to: contact.name,
      at: Date.now(),
      amount,
    };
    let temp = { ...this.loggedInUser };
    temp.coins = temp.coins - amount;
    this.loggedInUser = temp;
    this.loggedInUser.moves = [...this.loggedInUser.moves, move];
    this.storageService.save(this.key, this.loggedInUser);
    console.log('after amount ', this.loggedInUser);
 if(this._lastContact === contact.name){
    this._movesWithContact.push(move);
    this._movesWithContact$.next([...this._movesWithContact]);
 }
  }

  public getMovesForContact(moves, title) {
    if(!moves || !title) return false
    this._movesWithContact = []
    moves.filter((move) => {
      if (move.to === title) {
        this._movesWithContact.push(move);
      }
    });
    this._movesWithContact$.next([...this._movesWithContact]);
    this._lastContact = title;
  }

  public signUp(newUserName): User {
    this.loggedInUser = {
      name: newUserName,
      coins: 100,
      moves: [],
    };
    this.storageService.save(this.key, this.loggedInUser);
    return this.loggedInUser;
  }
}
