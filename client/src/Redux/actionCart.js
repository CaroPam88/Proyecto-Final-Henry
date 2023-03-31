import { addToCart, addToLocalCart, getToCart, getToLocalCart, clearLocalCart, filterLocalCart } from './cartAppSlice';

//===================================================BD CART===================================================\\
const addCartProduct = (product) => {
	return (dispatch) => {
		return dispatch(addToCart(product));
	};
};
const getCart = () => {
	return async (dispatch, getState) => {
		const userCart = getState().user.theUser.cart;
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
const clearLocalStorageCart = () => {
	return (dispatch) => {
		const defaultCart = [];
		return dispatch(clearLocalCart(defaultCart))
	}
};
//==============================================CURRENT PURECHASE==============================================\\



export {addCartProduct, getCart, addLocalCart, getLocalCart, clearLocalStorageCart, deleteLocalCartItem};
