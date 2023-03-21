import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: {},
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        fetchCart: (state, action) => {
            state.value = action.payload
        }
    },
})

// Action creators are generated for each case reducer function
export const { fetchCart } = cartSlice.actions

export default cartSlice.reducer