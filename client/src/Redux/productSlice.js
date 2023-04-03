import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products:[],
    filteredProducts:[],
    productDetail:[],
    colors:[],
    size:[],
    post:[],
    put:[],
};

const Slice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        getProducts: (state, action) => {
            state.products = action.payload;
            state.filteredProducts = action.payload;
        },
        postProducts:(state, action) => {
            state.post = action.payload;
        },
        getProdName: (state, action) => {
            state.filteredProducts = action.payload;
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
            state.filteredProducts = action.payload;
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
        filterClothes: (state, action) =>{
            state.filteredProducts = action.payload;
        },
        putProduct: (state, action) => {
            state.put = action.payload;
        },
        disableToProduct: (state, action) => {
            state.filteredProducts = action.payload;
        },
        modifyProduct: (state, action) => {
            state.productDetail = action.payload;
        },
    }
});

export const { getProducts,  postProducts, getProdName, getDetail, getColors, getSize, clearProducts, clearDetail, clearColors, clearSize, filterClothes, putProduct, disableToProduct, modifyProduct } = Slice.actions;
export default Slice.reducer;