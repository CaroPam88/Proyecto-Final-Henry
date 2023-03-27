import {createSlice} from '@reduxjs/toolkit';

const initialState = {
	theUser: {},
	postCartUser: [],
};

const SliceUSer = createSlice({
	name: 'user',
	initialState,
	reducers: {
		getTheUser: (state, action) => {
			state.theUser = action.payload;
		},
		getUserEmail: (state, action) => {
			state.theUser = action.payload;
		},
		postCar: (state, action) => {
			state.postCartUser = action.payload;
		},
		clearUser: (state, action) => {
			state.theUser = action.payload;
		},
		deleteItem: (state, action) => {
			state.postCartUser = action.payload;
		},
	},
});
export const {getTheUser, getUserEmail, postCar, clearUser, deleteItem} =
	SliceUSer.actions;
export default SliceUSer.reducer;
