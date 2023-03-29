import {createSlice} from '@reduxjs/toolkit';

const initialState = {
	cartItems: [],
	localStorageCart: [],
	cartTotalAmount: 0,
	localCartTotalAmount: 0,
	currentPurchase: [],
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
		addToCurrentPurechase: (state, action) => {
			state.currentPurchase = [...action.payload];
		},
		clearToCurrentPurechase: (state, action) => {
			state.currentPurchase = action.payload;
		},
	},
});
export const { addToCart, addToLocalCart, addToCurrentPurechase, getToCart, getToLocalCart, clearCart, clearLocalCart, clearToCurrentPurechase, filterLocalCart } = cartSlice.actions;
export default cartSlice.reducer;
