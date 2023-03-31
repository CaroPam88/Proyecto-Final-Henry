import {createSlice} from '@reduxjs/toolkit';

const initialState = {
	cartItems: [],
	localStorageCart: [],
	cartTotalAmount: 0,
	localCartTotalAmount: 0,
};

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addToCart: (state, action) => {
			state.cartItems = [...state.cartItems, action.payload];
			state.cartTotalAmount = state.cartTotalAmount + 1;
		},
		addToLocalCart: (state, action) => {
			state.localStorageCart = [...state.localStorageCart, action.payload];
			state.localCartTotalAmount = state.localCartTotalAmount + 1;
		},
		getToCart: (state, action) => {
			state.cartItems = action.payload;
			state.cartTotalAmount = action.payload.length;
		},
		getToLocalCart: (state, action) => {
			state.localStorageCart = action.payload;
			state.localCartTotalAmount = action.payload.length;
		},
		clearCart(state, action) {
			state.cartItems = [];
			state.cartTotalAmount = 0;
		},
		clearLocalCart: (state, action) => {
			state.localStorageCart = action.payload;
			state.localCartTotalAmount = 0;
		},
		filterLocalCart: (state, action) => {
			state.localStorageCart = action.payload;
			state.localCartTotalAmount = action.payload.length;
		},
		changeCantToItem: (state, action) => {
			state.localStorageCart = action.payload;
			state.localCartTotalAmount = action.payload.length;
		},
	},
});
export const { addToCart, addToLocalCart, getToCart, getToLocalCart, clearCart, clearLocalCart, filterLocalCart, changeCantToItem } = cartSlice.actions;
export default cartSlice.reducer;
