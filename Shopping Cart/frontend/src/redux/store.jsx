import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import productSlice from './productSlice'
import cartSlice from './cartSlice'

const persistConfig = {
    key: 'root',
    storage,
};

const rootReducer = combineReducers({
    product: productSlice,
    cart: cartSlice,
});


const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
});

export const persistor = persistStore(store);