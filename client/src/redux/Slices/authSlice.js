import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    data: null,
    isAuthenticated: false,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            state.data = action.payload
            state.isAuthenticated = true
        },
        logout: (state) => {
            state.data = null
            state.isAuthenticated = false
        },
    },
})

// Action creators are generated for each case reducer function
export const { login, logout } = authSlice.actions

export default authSlice.reducer