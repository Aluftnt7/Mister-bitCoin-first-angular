import { UserService } from 'src/services/user.service';
import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'move-list',
  templateUrl: './move-list.component.html',
  styleUrls: ['./move-list.component.scss']
})
export class MoveListComponent implements OnInit {
  @Input() title;
  @Input() moveList;
  movesWithContact$ : Observable<any[]>;
  splicedMoveList = []


  constructor(private userService: UserService) { }




  ngOnInit(): void {
    this.splicedMoveList = this.moveList.slice(this.moveList.length - 3, this.moveList.length );
    if(!this.title) return
    this.userService.getMovesForContact(this.moveList, this.title);
    this.movesWithContact$ = this.userService.movesWithContact$;


  }






}
