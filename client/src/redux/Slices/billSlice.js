import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    name: '',
    email: '',
    phone: '',
    address: '',
    cityDistricts: '',
    note: '',
    products: [],
    paymentMethod: '',
}

export const billSlice = createSlice({
    name: 'bill',
    initialState,
    reducers: {
        setBill: (state, action) => {
            state.name = action.payload.name
            state.email = action.payload.email
            state.phone = action.payload.phone
            state.address = action.payload.address
            state.cityDistricts = action.payload.cityDistricts
            state.note = action.payload.note
            state.products = action.payload.products
            state.paymentMethod = action.payload.paymentMethod
        },
        clearBill: (state) => {
            state.name = ''
            state.email = ''
            state.phone = ''
            state.address = ''
            state.cityDistricts = ''
            state.note = ''
            state.products = []
            state.paymentMethod = ''
        },
    },
})

export const { setBill, clearBill } = billSlice.actions

export default billSlice.reducer