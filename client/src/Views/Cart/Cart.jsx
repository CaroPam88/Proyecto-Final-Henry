import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getCart} from '../../Redux/actionCart';
import {getUserByEmail} from '../../Redux/actionUser';
import {useAuth0} from '@auth0/auth0-react';
import style from "./Cart.module.css"
import MercadoPago from "../../Components/MercadoPago/MercadoPago"


const Cart = () => {
	const dispatch = useDispatch();

	const {user, loginWithRedirect} = useAuth0();
	const theUser = useSelector((state) => state.user.theUser);
   

	useEffect(() => {
		if (theUser.id) {
			dispatch(getUserByEmail()).then(() => dispatch(getCart()));
		}
	}, [user]);

	let cart = useSelector((state) => state.cart.cartItems);

	cart = cart === undefined ? [] : cart;

	let canasta = JSON.parse(localStorage.getItem('cart'));

    console.log("carrito",cart);
	
	const [pagar, setPagar] = useState(true);
	
	const onSubmit = async (e) => {
		e.preventDefault();
		if(theUser.id){
			setPagar(false);
		}else{
			loginWithRedirect()
		}
		
	};
	
	return (
		<section>
			{theUser.id ? (
				<span>You are logged</span>
			) : (
				<span>You aren't logged</span>
			)}
			<h1>Your Cart</h1>
			{cart.length
				? cart?.map((item, i) => (
						<section key={i}>
							<h3>{item.id}</h3>
							<h4>{item.name}</h4>
							<img src={item.image} alt={item.name} />
							<p>{item.price}</p>
							<p>{item.color}</p>
							<p>{item.size}</p>
							<p>{item.cantidad}</p>
							
						</section>
						
				  ))
				: canasta?.map((item, i) => (
						<section key={i}>
							<h3>{item.id}</h3>
							<h4>{item.name}</h4>
							<img src={item.image} alt={item.name} />
							<p>{item.price}</p>
							<p>{item.color}</p>
							<p>{item.size}</p>
							<p>{item.cantidad}</p>
						</section>
				  ))}
				   { (pagar) ? <button  onClick={(e) => {
					onSubmit(e)
				  }}
				  className={style.botonComprar}>Pagar</button> : <MercadoPago ids= {cart} />}  
		</section>
	);
};

export default Cart;
