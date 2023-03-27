import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isAuth: false
    },
    reducers: {
        login: (store, action) => {
            store.isAuth = true
        },
        logout: (store, action) => {
            store.isAuth = false
        }
    }
})

export default authSlice.reducer
export const { login, logout } = authSlice.actions