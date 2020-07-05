import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    VERIFY_SUCCESS,
    VERIFY_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    USER_LOADED,
    AUTH_ERROR,
    CLEAR_ERROR,
    SET_LOADING
} from '../types'
export default (state, action) => {
    switch (action.type) {

        case REGISTER_SUCCESS: {
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                loading: false,
                error: null,
                user: null,
                msg: action.payload,
                OTPsent: true
            }
        }
        case REGISTER_FAIL: {
            state.loading = true
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                loading: false,
                error: action.payload,
                user: null,
            }
        }
        case VERIFY_SUCCESS: {
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                loading: false,
                error: null,
                user: null,
                msg: action.payload.msg,
                isVerified: true
            }
        }
        case VERIFY_FAIL: {
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                loading: false,
                error: action.payload.msg,
                user: null,
                msg: null,
                isVerified: false
            }
        }
        case LOGIN_SUCCESS: {
            localStorage.setItem('token', action.payload.token)
            return {
                ...state,
                ...action.payload,
                isAuthenticated: true,
                loading: false,
                msg: action.payload.msg,
                isVerified: true,
                error: null
            }
        }
        case LOGIN_FAIL: {
            localStorage.removeItem('token')
            return {
                error: action.payload,
                token: null,
                isAuthenticated: false,
                loading: false,
                user: null,
            }
        }
        case USER_LOADED: {
            return {
                ...state,
                isAuthenticated: true,
                loading: false,
                user: action.payload.user
            }
        }
        case AUTH_ERROR: {
            localStorage.removeItem('token')
            return {
                ...state,
                isAuthenticated: false,
                token: null,
                error: action.payload,
                loading: false,
                user: null
            }
        }
        case CLEAR_ERROR: {
            return {
                ...state,
                error: null
            }
        }
        case SET_LOADING: {
            return {
                ...state,
                loading: action.payload
            }
        }
        default:
            return state

    }
}