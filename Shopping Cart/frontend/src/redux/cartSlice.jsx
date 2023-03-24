import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: {
        itemsInCart:[],
        totalItems:0,
        totalPrice:0
    },
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItems: (state, action) => {
            const { product, quantity } = action.payload;
            state.value.itemsInCart.push({...product, quantity}); // Add quantity to the item object and push to the cart array
            state.value.totalItems += quantity; // Increment totalItems by the quantity added
            state.value.totalPrice += product.price * quantity;
        },
        addPrice: (state, action) => {
            state.value.totalPrice += action.payload;
        },
        removeItem: (state, action) => {
            state.value.itemsInCart = state.value.itemsInCart.filter(item => item.id !== action.payload.id);
            state.value.totalItems -= 1;
            state.value.totalPrice -= action.payload.price;
        },
        clearCart: (state) => {
            state.value.itemsInCart = [];
            state.value.totalItems = 0;
            state.value.totalPrice = 0;
        }
    },
})

// Action creators are generated for each case reducer function
export const { addItems, addPrice, removeItem, clearCart } = cartSlice.actions

export default cartSlice.reducer