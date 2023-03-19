import { configureStore } from '@reduxjs/toolkit';
import  products  from './productSlice';
import paged from './pagedSlice'

const store = configureStore({
    reducer: {
        products:products,
        paged: paged,
    },
});

export default store;