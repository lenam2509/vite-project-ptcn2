import { configureStore } from '@reduxjs/toolkit'
import authSlice from './Slices/authSlice'
import cartSlice from './Slices/cartSlice'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig1 = {
    key: 'auth',
    storage,
    // whitelist: ['isAuthenticated'],
}

const persistConfig2 = {
    key: 'cart',
    storage,
    // whitelist: ['isAuthenticated'],
}



const persistedReducer1 = persistReducer(persistConfig1, authSlice)
const persistedReducer2 = persistReducer(persistConfig2, cartSlice)

export const store = configureStore({
    reducer: {
        auth: persistedReducer1,
        cart: persistedReducer2,
    },
})

export const persistor = persistStore(store)


