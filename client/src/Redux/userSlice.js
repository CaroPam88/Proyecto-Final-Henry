import {createSlice} from '@reduxjs/toolkit';

const initialState = {
	theUser: {},
	postCartUser: [],
	allUsers: [],
	userId: {},
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
		changeCantItem: (state, action) => {
			state.postCartUser = action.payload;
		},
		getAllUsers: (state, action) => {
			state.allUsers = action.payload;
		},
		getUserById: (state, action) => {
			state.userId = action.payload;
		},
		changelocked: (state, action) => {
			state.userId = action.payload;
		},
	},
});
export const {
	getTheUser,
	getUserEmail,
	postCar,
	clearUser,
	deleteItem,
	changeCantItem,
	getAllUsers,
	getUserById,
	changelocked,
} = SliceUSer.actions;
export default SliceUSer.reducer;
