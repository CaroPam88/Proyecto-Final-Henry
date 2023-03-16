import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
    cartTotalAmount: 0,
};


const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers:{
    addToCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
        );
      if (itemIndex < 0) {
        const tempProduct = { ...action.payload, cartQuantity: 1 };
          state.cartItems.push(tempProduct);
          state.cartTotalAmount += action.payload.price
        } else {
         state.cartItems[itemIndex].cartQuantity += 1;
          state.cartTotalAmount += action.payload.price
        }
    },
    removeFromCart(state, action) {
        const nextCartItems = state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.id
        );
        state.cartItems = nextCartItems;
        state.cartTotalAmount -= action.payload.price * action.payload.cartQuantity
      },
    decreaseCart(state, action) {
        const itemIndex = state.cartItems.findIndex(
          (cartItem) => cartItem.id === action.payload.id
        );
        if (state.cartItems[itemIndex].cartQuantity > 1) {
          state.cartItems[itemIndex].cartQuantity -= 1;
          state.cartTotalAmount -= action.payload.price
        } else if (state.cartItems[itemIndex].cartQuantity === 1) {
          const nextCartItems = state.cartItems.filter(
            (cartItem) => cartItem.id !== action.payload.id
          );
          state.cartItems = nextCartItems;
          state.cartTotalAmount -= action.payload.price
        }
      },
      clearCart(state, action) {
        state.cartItems = [];
        state.cartTotalAmount=0
      },

    }
})
export const {
    addToCart,
    removeFromCart,
    decreaseCart,
    clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;