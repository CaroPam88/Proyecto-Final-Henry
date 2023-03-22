import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    theUser : {},
};

const SliceUSer = createSlice({
    name: 'user',
    initialState,
    reducers: {
        getTheUser: ( state, action ) => {
            state.theUser = action.payload;
        }
    }
});
export const { getTheUser } = SliceUSer.actions;
export default SliceUSer.reducer;