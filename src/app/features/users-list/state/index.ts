import { createFeatureSelector, createSelector } from "@ngrx/store";
import { UserState } from "./user.reducer";

const getUsersFeatureState = createFeatureSelector<UserState>('users')
export const getUsers = createSelector(getUsersFeatureState, state => state.users)
export const getCurrentUserId = createSelector(getUsersFeatureState, state => state.currentUserId)
export const getErrorMsg = createSelector(getUsersFeatureState, state => state.error)