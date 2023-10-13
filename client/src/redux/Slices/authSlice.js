import { createSlice } from '@reduxjs/toolkit'
import AxiosConfig from '../../axios/AxiosConfig'

const initialState = {
    data: null,
    isAuthenticated: false,
    token: null,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            state.data = action.payload.user
            state.isAuthenticated = true
            state.token = action.payload.token
        },
        logout: (state) => {
            state.data = null
            state.isAuthenticated = false
            state.token = null
        },
        update: (state, action) => {
            state.data = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { login, logout, update } = authSlice.actions

export default authSlice.reducer