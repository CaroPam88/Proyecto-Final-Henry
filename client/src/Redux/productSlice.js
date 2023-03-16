import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products:[],
    filteredProducs:[],
    productDetail:[],
    colors:[],
    size:[],
    post:[],
};

const Slice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        getProducts: (state, action) => {
            state.products = action.payload;
            state.filteredProducs = action.payload;
        },
        postProducts:(state, action) => {
            state.post = action.payload;
        },
        getProdName: (state, action) => {
            state.filteredProducs = action.payload;
        },
        getDetail: (state, action) => {
            state.productDetail = action.payload;
        },
        getColors: (state, action) => {
            state.colors = action.payload;
        },
        getSize: (state, action) => {
            state.size = action.payload;
        },
        clearProducts: (state, action) => {
            state.products = action.payload;
            state.filteredProducs = action.payload;
        },
        clearDetail: (state, action) => {
            state.productDetail = action.payload;
        },
        clearColors: (state, action) => {
            state.colors = action.payload;
        },
        clearSize: (state, action) => {
            state.size = action.payload;
        },
    }
});

export const { getProducts,  postProducts, getProdName, getDetail, getColors, getSize, clearProducts, clearDetail, clearColors, clearSize } = Slice.actions;
export default Slice.reducer;