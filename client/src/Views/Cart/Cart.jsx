import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "../../Redux/actionCart";
import { useAuth0 } from '@auth0/auth0-react';

const Cart = () => {
    const dispatch = useDispatch();
    const { isAuthenticated, user } = useAuth0();
    
    const [userFired, setUserFired] = useState(false);
    let canasta = JSON.parse(localStorage.getItem("cart"))
    
    useEffect(() => {
        if (isAuthenticated && userFired) {
            dispatch(getCart());
        }
    }, [isAuthenticated, userFired, user]);
    
    if (isAuthenticated && !userFired) {
        setUserFired(true); 
    }
    
    const cart = useSelector(state => state.cart.cartItems)
    console.log(cart);
    return(<section>
        {isAuthenticated ? <span>You are logged</span> : <span>You aren't logged</span>}
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