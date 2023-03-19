import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentPage : 1,
    order: '',
};

const SlicePaged = createSlice({
    name: 'paged',
    initialState,
    reducers: {
        setCurrent : (state, action) => {
            state.currentPage = action.payload;
        }, 
        setOrderer : (state, action) => {
            state.currentPage = action.payload;
        }, 
    }
});

export const { setCurrent, setOrderer } = SlicePaged.actions;
export default SlicePaged.reducer;