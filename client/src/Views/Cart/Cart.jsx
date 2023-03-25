import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "../../Redux/actionCart";

const Cart = () => {
    const dispatch = useDispatch();
    const theUser = useSelector(state => state.user.theUser)
    let canasta = JSON.parse(localStorage.getItem("cart"))
    
    useEffect(() => {
        if (theUser) {
            dispatch(getCart());
        }
    }, [theUser]);
    
    
    const cart = useSelector(state => state.cart.cartItems)
    console.log('cart',cart);
    return(<section>
        {theUser ? <span>You are logged</span> : <span>You aren't logged</span>}
        <h1>Your Cart</h1>
        {cart
            ? cart?.map((item, i) => <section key={i}>
                    <h3>{item.id}</h3>
                    <p>{item.price}</p>
                    <p>{item.color}</p>
                    <p>{item.size}</p>
                    <p>{item.cantidad}</p>
                </section>)
            : canasta?.map((item, i) => <section key={i}>
                    <h3>{item.id}</h3>
                    <p>{item.price}</p>
                    <p>{item.color}</p>
                    <p>{item.size}</p>
                    <p>{item.cantidad}</p>
                </section>)    
            }
    </section>)
};

export default Cart;