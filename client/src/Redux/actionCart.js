import { addToCart, addToLocalCart, addToCurrentPurechase, getToCart, getToLocalCart, clearCart, clearLocalCart, clearToCurrentPurechase, filterLocalCart } from './cartAppSlice';

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
		console.log('localStorage', localCart)
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
//Agrega el array al estado global del slice de cartAppSlice, en el apartado de currentPurechase, espera un array.
const addCurrentPurechase = (arr) => {
	return (dispatch) => {
		dispatch(addToCurrentPurechase(arr));
	}
};
//Limpia el estado globar currentPurechase del slice cartAppSlice, igualandolo a un array vacio.
const clearCurrentPurechase = () => {
	return (dispatch) => {
		const defaultPurechase = [];
		return dispatch(clearToCurrentPurechase(defaultPurechase))
	}
};


export {addCartProduct, getCart, addLocalCart, getLocalCart, clearLocalStorageCart, deleteLocalCartItem, addCurrentPurechase, clearCurrentPurechase};
