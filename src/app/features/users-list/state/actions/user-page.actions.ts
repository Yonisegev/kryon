import { createAction, props } from "@ngrx/store";

export const loadUsers = createAction('[User Page] Load Users')
export const deleteUser = createAction('[User Page] Delete User', props<{userId: string}>())
