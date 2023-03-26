import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: {
        itemsInCart: [],
        totalItems: 0,
        totalPrice: 0
    },
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItems: (state, action) => {
            const { product, quantity } = action.payload;
            //check to prevent adding duplicates of the same object
            const existingItem = state.value.itemsInCart.find(item => item.id === product.id);
            if (existingItem) {
                existingItem.quantity += quantity;
                state.value.totalItems += quantity;
            } else {
                state.value.itemsInCart.push({ ...product, quantity });
                state.value.totalItems += quantity;
            }
            state.value.totalPrice += product.price * quantity;
        },

        removeItem: (state, action) => {
            state.value.itemsInCart = state.value.itemsInCart.filter(item => item.id !== action.payload.id);
            state.value.totalItems -= 1;
            state.value.totalPrice -= action.payload.price;
        },
        clearItem: (state,action) => {
            //to remove the item according to the id provided
            const itemId = action.payload;
            const itemIndex = state.value.itemsInCart.findIndex(item => item.id === itemId);
            if (itemIndex !== -1) {
                state.value.totalItems -= state.value.itemsInCart[itemIndex].quantity;
                state.value.totalPrice -= state.value.itemsInCart[itemIndex].price * state.value.itemsInCart[itemIndex].quantity;
                state.value.itemsInCart.splice(itemIndex, 1);
            }
        },
        incrementItem: (state, action) => {
            const itemId = action.payload;
            const itemIndex = state.value.itemsInCart.findIndex(item => item.id === itemId);
            if (itemIndex !== -1) {
                state.value.itemsInCart[itemIndex].quantity += 1;
                state.value.totalItems += 1;
                state.value.totalPrice += state.value.itemsInCart[itemIndex].price;
            }
        },
        decrementItem: (state, action) => {
            const itemId = action.payload;
            const itemIndex = state.value.itemsInCart.findIndex(item => item.id === itemId);
            if (itemIndex !== -1) {
                state.value.itemsInCart[itemIndex].quantity -= 1;
                state.value.totalItems -= 1;
                state.value.totalPrice -= state.value.itemsInCart[itemIndex].price;
                if (state.value.itemsInCart[itemIndex].quantity === 0) {
                    state.value.itemsInCart.splice(itemIndex, 1);
                }
            }
        },
    },
})

// Action creators are generated for each case reducer function
export const { addItems, removeItem, clearItem, incrementItem, decrementItem } = cartSlice.actions

export default cartSlice.reducer