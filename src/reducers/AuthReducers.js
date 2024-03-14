import React from 'react'

const AuthReducers = (state = {}, action) => {


    switch (action.type) {
        case "LOGIN":
            return {
                ...state,
                user: action.payload.user,
                isLogged: true,
                token: action.payload.token,
                isLoading: false,
                errorMsg: ''
            }

        case "LOGOUT":
            return {
                ...state,
                user: null,
                isLogged: false,
                token: null,
                isLoading: false,
                errorMsg: ""
            }
        case "LOADING":
            return {
                ...state,
                isLoading: action.payload.isLoading,
            }

        case "ERROR":
            return {
                ...state,
                user: null,
                isLogged: false,
                token: null,
                isLoading: false,
                errorMsg: action.payload.errorMsg
            }


        default:
            return state;
    }
}

export default AuthReducers