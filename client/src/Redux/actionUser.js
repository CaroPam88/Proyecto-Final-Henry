import {
	getTheUser,
	getUserEmail,
	postCar,
	clearUser,
	deleteItem,
	changeCantItem,
	getAllUsers,
	getUserById,
	changelocked,
} from './userSlice';
import axios from 'axios';

const createUser = (user) => {
	return async (dispatch) => {
		try {
			const response = (await axios.post('/user/', user)).data;
			return dispatch(getTheUser(response));
		} catch (error) {
			alert(`${error}: error al crear o buscar el ususario`);
		}
	};
};
const addProductUser = (elemento) => {
	return async (dispatch, getState) => {
		try {
			const {id} = getState().user.theUser;
			if (elemento) {
				const response = (
					await axios.post(`/user/cart/${id}`, elemento)
				).data;
				return dispatch(postCar(response));
			}
		} catch (error) {
			alert(`${error}: error al agregar el producto`);
		}
	};
};
const getUserByEmail = () => {
	return async (dispatch, getState) => {
		try {
			const {email} = getState().user.theUser;
			const response = (await axios(`/user/${email}`)).data;
			return dispatch(getUserEmail(response));
		} catch (error) {
			alert(`${error}: error al obtener el ususario`);
		}
	};
};
const clearTheUser = () => {
	return (dispatch) => {
		return dispatch(clearUser({}));
	};
};

const deleteTheItem = (idItem) => {
	return async (dispatch, getState) => {
		try {
			const {id} = getState().user.theUser;

			const response = (await axios.delete(`/user/cart/${id}/${idItem}`))
				.data;
			return dispatch(deleteItem(response));
		} catch (error) {
			alert(`${error}: error al eliminar el producto`);
		}
	};
};

const changeCantInTheItem = (idItem, cantidad) => {
	return async (dispatch, getState) => {
		try {
			const {id} = getState().user.theUser;
			// const {idItem} = getState().cart.cart;
			const response = (
				await axios.put(`/user/cart/${id}/${idItem}`, cantidad)
			).data;
			return dispatch(changeCantItem(response));
		} catch (error) {
			alert(`${error}: error al cambiar la cantidad`);
		}
	};
};

const getAllTheUsers = () => {
	return async (dispatch) => {
		try {
			const response = (await axios.get('/user')).data;
			return dispatch(getAllUsers(response));
		} catch (error) {
			alert(`${error}: error al obtener los usuarios`);
		}
	};
};
const getUserByTheId = (userId) => {
	return async (dispatch) => {
		try {
			const response = (await axios.get(`/user/id/${userId}`)).data;
			return dispatch(getUserById(response));
		} catch (error) {
			alert(`${error}: error al obtener el usuario`);
		}
	};
};

const changeTheUserlocked = (userId) => {
	return async (dispatch) => {
		try {
			const response = await axios.put(`/user/locked/${userId}`);
			return dispatch(changelocked(response));
		} catch (error) {
			alert(`${error}: error al cambiar el estado del usuario`);
		}
	};
};

export {
	createUser,
	getUserByEmail,
	addProductUser,
	clearTheUser,
	deleteTheItem,
	changeCantInTheItem,
	getAllTheUsers,
	getUserByTheId,
	changeTheUserlocked,
};
