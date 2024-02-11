import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'checking', // 'checking', 'not-authenticated', 'authenticated'
        usuario: {},
        //uid: null,
        //email: null,
        //displayName: null,
        errorMessage: null,
    },
    reducers: {
        login: ( state, { payload } ) => {
            state.status = 'authenticated', // 'checking', 'not-authenticated', 'authenticated'
            //state.uid = payload.uid;
            //state.email = payload.email;
            //state.displayName = payload.displayName;
            state.usuario = payload.usuario,
            state.errorMessage = null;
        },
        logout: ( state, { payload } ) => {
            state.status = 'not-authenticated', // 'checking', 'not-authenticated', 'authenticated'
            //state.uid = null;
           // state.email = null;
            //state.displayName = null;
            state.usuario = {},
            state.errorMessage = payload?.response.data.error;
        },
        checkingCredentials: (state) => {
            state.status = 'checking';
        }
    }
});

// Action creators are generated for each case reducer function
export const { login, logout, checkingCredentials } = authSlice.actions;