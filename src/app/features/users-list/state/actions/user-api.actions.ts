import { createAction, props } from "@ngrx/store";
import { User } from "../../models/user";

export const loadUsersSuccess = createAction('[User API] Load Users Success', props<{ users: User[] }>())
export const loadUsersFailure = createAction('[User API] Load Users Fail', props<{ error: string }>())
export const deleteUserSuccess = createAction('[User API] Delete User Success', props<{userId: string}>())
export const deleteUserFailure = createAction('[User API] Delete User Fail', props<{error: string}>())