import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { take } from 'rxjs/operators';
import { User } from '../../models/user';
import { getCurrentUserId, getErrorMsg, getSearchValue, getUsers } from '../../state';
import { UserPageActions } from '../../state/actions';

@Component({
  selector: 'users-shell',
  templateUrl: './users-shell.component.html',
  styleUrls: ['./users-shell.component.scss']
})
export class UsersShellComponent implements OnInit {
  users$: Observable<User[]> | undefined;
  errorMessage$: Observable<string> | undefined;
  currentUserId$: Observable<string> | undefined;
  isConfirmModalOpen: boolean = false;
  userIdToDelete: string = ''
  searchValue$: Observable<string> | undefined;
  routeSub: Subscription | undefined

  constructor(private store: Store, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.loadUsers()
    this.users$ = this.store.select(getUsers)
    this.errorMessage$ = this.store.select(getErrorMsg)
    this.currentUserId$ = this.store.select(getCurrentUserId)
    this.searchValue$ = this.store.select(getSearchValue)
    this.routeSub = this.route.firstChild?.params.subscribe((params) => {
      this.store.dispatch(UserPageActions.setCurrentUserId({ userId: params.id ? params.id : '' }))
    })
  }

  ngOnDestroy() {
    this.routeSub?.unsubscribe()
  }
  
  loadUsers() {
    this.store.dispatch(UserPageActions.loadUsers({}))
  }

  onDeleteUser(userId: string) {
    this.userIdToDelete = userId
    this.isConfirmModalOpen = true
  }

  onInfoToggled(userId: string) {
    this.currentUserId$?.pipe(
      take(1)
    ).subscribe(currentUserId => {
      if (currentUserId === userId) {
        this.store.dispatch(UserPageActions.setCurrentUserId({ userId: '' }))
      } else {
        this.store.dispatch(UserPageActions.setCurrentUserId({ userId }))
      }
    })
  }

  onModalAction(state: boolean) {
    if (state) {
      this.store.dispatch(UserPageActions.deleteUser({ userId: this.userIdToDelete }))
    }
    this.isConfirmModalOpen = false
    this.userIdToDelete = ''

  }

}
