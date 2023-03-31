import { addToCart, addToLocalCart, getToCart, getToLocalCart, clearLocalCart, filterLocalCart, changeCantToItem } from './cartAppSlice';
import axios from 'axios';

//===================================================BD CART===================================================\\
const addCartProduct = (product) => {
	return (dispatch) => {
		return dispatch(addToCart(product));
	};
};
const getCart = () => {
	return async (dispatch, getState) => {
		const id = getState().user.theUser.id;
		const userCart = (await axios(`user/thecart/${id}`)).data;
		
		return dispatch(getToCart(userCart));
	};
};
//==============================================LOCALSTORAGE CART==============================================\\
const addLocalCart = (product) => {
	return (dispatch) => {
		return dispatch(addToLocalCart(product));
	};
}
const getLocalCart = () => {
	return async (dispatch) => {
		let localCart = await (JSON.parse(localStorage.getItem('cart')));
		return dispatch(getToLocalCart(localCart));
	}
};
const deleteLocalCartItem = (index) => {
	return (dispatch, getState) => {
		const localCart = getState().cart.localStorageCart;
			const newLocalCart = localCart.filter((el, i) => i !== index)
			localStorage.setItem('cart', JSON.stringify(newLocalCart))
			return dispatch(filterLocalCart(newLocalCart))
	}
};
const changeCant = (index, change) => {
	return (dispatch, getState) => {
		const currentLocalStorage = getState().cart.localStorageCart;
		const itemToUpdate = { ...currentLocalStorage[index] }; // Hacer una copia del objeto en la posición index
		itemToUpdate.cantidad += change; // Modificar la propiedad cantidad del objeto copiado
		const updatedCart = [...currentLocalStorage]; // Hacer una copia del array original
		updatedCart[index] = itemToUpdate; // Reemplazar el objeto original con el objeto modificado
		console.log(updatedCart); // Verificar que el array fue modificado correctamente
		localStorage.setItem('cart', JSON.stringify(updatedCart))
		return dispatch(changeCantToItem(updatedCart)); 
	};
};
const clearLocalStorageCart = () => {
	return (dispatch) => {
		const defaultCart = [];
		return dispatch(clearLocalCart(defaultCart))
	}
};
//==============================================CURRENT PURECHASE==============================================\\



export {addCartProduct, getCart, addLocalCart, getLocalCart, clearLocalStorageCart, deleteLocalCartItem, changeCant};
