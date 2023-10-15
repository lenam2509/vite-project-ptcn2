import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [],
    totalQuantity: 0,
    totalPrice: 0,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {

        addItem(state, action) {
            const newItem = action.payload;
            const existingItem = state.items.find(item => item.id === newItem.id);
            if (existingItem) {
                existingItem.quantity++;
            } else {
                state.items.push({ ...newItem, quantity: 1 });
            }
            state.totalQuantity++;
            state.totalPrice += newItem.price;

        },

        addItemWithQuantity(state, action) {
            const newItem = action.payload;
            const quantity = action.payload.quantity;
            const existingItem = state.items.find(item => item.id === newItem.id);
            if (existingItem) {
                existingItem.quantity += quantity;
            } else {
                state.items.push({ ...newItem, quantity: quantity });
            }
            state.totalQuantity += quantity;
            state.totalPrice += newItem.price * quantity;
        },

        removeItem(state, action) {
            const id = action.payload;
            const existingItem = state.items.find(item => item.id === id);
            if (existingItem.quantity === 1) {
                state.items = state.items.filter(item => item.id !== id);
            } else {
                existingItem.quantity--;
            }
            state.totalQuantity--;
            state.totalPrice -= existingItem.price;

        },

        clearCart(state) {
            state.items = [];
            state.totalQuantity = 0;
            state.totalPrice = 0;
        },

        itemPLus(state, action) {
            const id = action.payload;
            const existingItem = state.items.find(item => item.id === id);
            existingItem.quantity++;
            state.totalQuantity++;
            state.totalPrice += existingItem.price;

        },

        itemMinus(state, action) {
            const id = action.payload;
            const existingItem = state.items.find(item => item.id === id);
            if (existingItem.quantity === 1) {
                state.items = state.items.filter(item => item.id !== id);
            } else {
                existingItem.quantity--;
            }
            state.totalQuantity--;
            state.totalPrice -= existingItem.price;

        },

    },
});

export const { addItem, removeItem, clearCart, itemPLus, itemMinus, addItemWithQuantity } = cartSlice.actions;

export default cartSlice.reducer;
