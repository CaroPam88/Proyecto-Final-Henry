import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    theUser : {},
    postCartUser: [],
};

const SliceUSer = createSlice({
    name: 'user',
    initialState,
    reducers: {
        getTheUser: ( state, action ) => {
            state.theUser = action.payload;
        },
        postCar: (state, action) => {
            state.postCartUser = action.payload;
        },
        clearUser: (state, action) => {
            state.theUser = action.payload;
        },
    }
});
export const { getTheUser, postCar, clearUser } = SliceUSer.actions;
export default SliceUSer.reducer;