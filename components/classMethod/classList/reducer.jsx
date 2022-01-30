import { createStore } from 'redux'

export const ADDUSER = 'ADDUSER';

export const userDispatcher = (name) => {
    return{
        userName: name,
    }
}

export const initState = {
    userList: [],
}

export const userReducer = (state = initState, action) => {
    if(action.type === ADDUSER){
        return{
            userList: [action.userName, ...state.userList]
        }
    }
    return state;
}

export const store = createStore(userReducer)