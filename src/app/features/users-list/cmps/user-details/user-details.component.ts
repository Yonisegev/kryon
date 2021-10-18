import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from '../../models/user';
import { UsersService } from '../../services/users.service';
@Component({
  selector: 'user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  user$: Observable<User | null> | undefined
  constructor(private store: Store, private route: ActivatedRoute, private userService: UsersService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const userId = params.id
      if (userId) {
        this.user$ = this.userService.getUserById(userId)
      }
    })
  }

  getUserAvatar(user: any) {
    return `../../../../../assets/images/${user.gender || 'female'}-avatar.png`
  }

}
