import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { User } from '../../models/user';
import { UsersService } from '../../services/users.service';
@Component({
  selector: 'user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit, OnDestroy {
  user$: Observable<User | null> | undefined
  currentUserId: string = ''
  routeSub: Subscription | undefined
  constructor(private route: ActivatedRoute, private userService: UsersService) { }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe((params) => {
      this.currentUserId = params.id
      if (this.currentUserId) {
        this.user$ = this.userService.getUserById(this.currentUserId)
      }
    })
  }

  ngOnDestroy() {
    this.routeSub?.unsubscribe()
  }

  getUserAvatar(user: any) {
    return `../../../../../assets/images/${user.gender || 'female'}-avatar.png`
  }

}
