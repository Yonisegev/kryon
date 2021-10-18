import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { UsersService } from "../services/users.service";
import { UserApiActions, UserPageActions } from './actions'
import { catchError, map, mergeMap } from "rxjs/operators";
import { of } from "rxjs";


@Injectable()
export class UserEffects {
    constructor(private actions$: Actions, private userService: UsersService) { }

    loadUsers$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(UserPageActions.loadUsers),
            mergeMap(() => this.userService.getUsers().pipe(
                map(users => UserApiActions.loadUsersSuccess({ users })),
                catchError(error => of(UserApiActions.loadUsersFailure({ error })))
            ))
        )
    })
}