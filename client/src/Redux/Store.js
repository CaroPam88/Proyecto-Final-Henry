import { configureStore } from '@reduxjs/toolkit';
import  products  from './productSlice';
import paged from './pagedSlice'
import user from './userSlice'

const store = configureStore({
    reducer: {
        products:products,
        paged: paged,
        user: user,
    },
});

export default store;