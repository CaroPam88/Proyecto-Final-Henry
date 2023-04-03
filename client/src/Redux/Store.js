import { configureStore } from '@reduxjs/toolkit';
import  products  from './productSlice';
import paged from './pagedSlice'
import user from './userSlice'
import cart from './cartAppSlice'

const store = configureStore({
    reducer: {
        products:products,
        paged: paged,
        user: user,
        cart: cart,
    },
});

export default store;