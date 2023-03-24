import { addToCart, getToCart } from "./cartAppSlice";

const addCartProduct = ( product ) => {
    return ( dispatch ) => {
        return dispatch(addToCart(product));
    }
};
const getCart = () => {
    return async ( dispatch,getState ) => {
        const userCart = getState().user.theUser.cart;
        return dispatch(getToCart(userCart));
    }
}
export { addCartProduct, getCart };