import { createReducer, on } from "@ngrx/store";
import { User } from "../models/user";
import { UserApiActions, UserPageActions } from "./actions";

export interface UserState {
    users: User[]
    currentUserId: string,
    error: string,
    searchValue: string
}

const initialState: UserState = {
    users: [],
    currentUserId: '',
    error: '',
    searchValue: ''
}

export const userReducer = createReducer<UserState>(
    initialState,
    on(UserApiActions.loadUsersSuccess, (state, action): UserState => {
        return {
            ...state,
            users: action.users
        }
    }),
    on(UserApiActions.loadUsersFailure, (state, action): UserState => {
        return {
            ...state,
            users: [],
            error: action.error
        }
    }),
    on(UserApiActions.deleteUserSuccess, (state, action): UserState => {
        return {
            ...state,
            users: state.users.filter(user => user.id !== action.userId)
        }
    }),
    on(UserApiActions.deleteUserFailure, (state, action): UserState => {
        return {
            ...state,
            users: [],
            error: action.error
        }
    }),
    on(UserPageActions.setCurrentUserId, (state, action): UserState => {
        return {
            ...state,
            currentUserId: action.userId
        }
    }),
    on(UserPageActions.setSearchValue, (state, action): UserState => {
        return {
            ...state,
            searchValue: action.searchValue
        }
    })

)