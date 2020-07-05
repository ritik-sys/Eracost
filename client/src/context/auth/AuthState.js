import React, { useReducer } from 'react';
import authContext from './authContext';
import authReducer from './authReducer';
import {
    VERIFY_SUCCESS,
    VERIFY_FAIL,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    USER_LOADED,
    AUTH_ERROR,
    CLEAR_ERROR,
    SET_LOADING
} from '../types'
import axios from 'axios'
import setAuthToken from '../../setAuthToken';




const AuthState = (props) => {
    const initialState = {
        token: null,
        isAuthenticated: false,
        loading: false,
        error: null,
        user: null,
        msg: null,
        isVerified: false,
        OTPsent: false
    }
    const [state, dispatch] = useReducer(authReducer, initialState)

    //loadUser
    const loadUser = async () => {
        if (localStorage.getItem('token')) {
            setAuthToken(localStorage.token)
        }
        axios.get('/api/auth', {
            headers: {
                'Access-Control-Allow-Credentials': true
            }
        })
            .then(res => {
                dispatch({
                    type: USER_LOADED,
                    payload: res.data
                })
            })
            .catch(err => {
                dispatch({
                    type: AUTH_ERROR
                })
            })
    }

    //SETlOADING
    const setLoading = async value => {
        dispatch({
            type: SET_LOADING,
            payload: value
        })
    }
    //registeruser
    const registerUser = async formData => {

        await axios.post('/api/users', formData, {
            header: {
                'content-type': 'application/json',
                'Access-Control-Allow-Credentials': true
            }
        })
            .then(res => {
                dispatch({
                    type: REGISTER_SUCCESS,
                    payload: res.data
                })
            })
            .catch(error => {
                dispatch({
                    type: REGISTER_FAIL,
                    payload: error.response.data.msg
                })
            })



    }
    //verifyUser
    const verifyUser = async formData => {
        await axios.post('/api/postConfirmation', formData, {
            header: {
                'content-type': 'application/json'
            }
        })

            .then(res => {
                console.log(res.data)
                dispatch({
                    type: VERIFY_SUCCESS,
                    payload: res.data
                })
            })
            .catch(err => {
                dispatch({
                    type: VERIFY_FAIL,
                    payload: err.response.data
                })
            })

    }
    //LoginUser
    const loginUser = async formData => {
        const res = await axios.post('/api/auth', formData, {
            header: {
                'content-type': 'application/json'
            }
        })
            .then(res => {
                dispatch({
                    type: LOGIN_SUCCESS,
                    payload: res.data
                })
                loadUser()
            })
            .catch(err => {
                dispatch({
                    type: LOGIN_FAIL,
                    payload: err.response.data.msg
                })
            })
    }
    const clearError = () => {
        dispatch({
            type: CLEAR_ERROR
        })
    }

    return (
        <authContext.Provider
            value={{
                token: state.token,
                isAuthenticated: state.isAuthenticated,
                user: state.user,
                loading: state.loading,
                error: state.error,
                msg: state.msg,
                isVerified: state.isVerified,
                OTPsent: state.OTPsent,
                registerUser,
                verifyUser,
                loginUser,
                loadUser,
                clearError,
                setLoading
            }}>
            {props.children}
        </authContext.Provider>
    )

}
export default AuthState