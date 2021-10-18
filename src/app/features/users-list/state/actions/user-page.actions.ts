import { createAction, props } from "@ngrx/store";

export const loadUsers = createAction('[User Page] Load Users', props<{ searchText?: string }>())
export const deleteUser = createAction('[User Page] Delete User', props<{ userId: string }>())
export const setCurrentUserId = createAction('[User Page] Set Current User Id', props<{ userId: string }>())
