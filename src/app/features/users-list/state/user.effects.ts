import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { UsersService } from "../services/users.service";
import { UserApiActions, UserPageActions } from './actions'
import { catchError, concatMap, map, mergeMap } from "rxjs/operators";
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

    deleteUser$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(UserPageActions.deleteUser),
            mergeMap((action) => this.userService.deleteUser(action.userId).pipe(
                map(() => UserApiActions.deleteUserSuccess({ userId: action.userId })),
                catchError((error) => of(UserApiActions.deleteUserFailure({ error })))
            ))
        )
    })
}