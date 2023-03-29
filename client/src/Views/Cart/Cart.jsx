import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getCart, getLocalCart, deleteLocalCartItem} from '../../Redux/actionCart';
import { getUserByEmail, deleteTheItem, changeCantInTheItem } from '../../Redux/actionUser';
import {useAuth0} from '@auth0/auth0-react';
import style from './Cart.module.css';
import MercadoPago from '../../Components/MercadoPago/MercadoPago';

const Cart = () => {
	const dispatch = useDispatch();

	const {loginWithRedirect} = useAuth0();
	const theUser = useSelector((state) => state.user.theUser);

	let cart = useSelector((state) => state.cart.cartItems ? state.cart.cartItems : []);
	let canasta = useSelector((state) => state.cart.localStorageCart ? state.cart.localStorageCart : []);


	const fetchCart = () => {
		if (theUser.id) dispatch(getUserByEmail()).then(() => dispatch(getCart()));
		else dispatch(getLocalCart());
	};
	
	useEffect(() => {
		fetchCart()
	}, []);


	const [pagar, setPagar] = useState(true);

	let handleDelete = (index) => {
		if (theUser.id) dispatch(deleteTheItem(index)).then(() => fetchCart());
		// if(!theUser.id) console.log(index);
		if(!theUser.id) {
		dispatch(deleteLocalCartItem(index));
		fetchCart();
		}
	};


	const handleChangeCant = (item, change) => {
		let obj = {cantidad: item.cantidad + change};
		dispatch(changeCantInTheItem(item.cartIndex, obj));
	};

	const onSubmit = async (e) => {
		try {
			e.preventDefault();
			if (theUser.id) {
				setPagar(false);
			} else {
				loginWithRedirect();
			}
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<section clasName={style.section}>
			{theUser.id ? (
				<span>You are logged</span>
			) : (
				<span>You aren't logged</span>
			)}
			<h1 className={style.h1}>Your Cart</h1>
			{cart.length
				? cart.map((item, i) => (
						<div key={i} className={style.itemContainer}>
							<div className={style.imgContainer}>
								<img
									className={style.img}
									src={item.image}
									alt={item.name}
								/>
							</div>
							<div className={style.descriptionContainer}>
								<div className={style.buttonContainer}>
									<button
										className={style.botonEliminar}
										onClick={() =>
											handleDelete(item.cartIndex)
										}
									>
										X
									</button>
								</div>
								<h4 className={style.h4}>{item.name}</h4>
								<p className={style.p}>
									Precio: <strong>${item.price}</strong>
								</p>
								<p className={style.p}>Color: {item.color}</p>
								<p className={style.p}>Talle: {item.size}</p>
								<p className={style.p}>
									Cantidad:
									<button
										className={style.cantButton}
										onClick={() =>
											handleChangeCant(item, -1)
										}
									>
										-
									</button>
									{item.cantidad}
									<button
										className={style.cantButton}
										onClick={() =>
											handleChangeCant(item, 1)
										}
									>
										+
									</button>
								</p>
							</div>
						</div>
					))
				: canasta?.map((item, i) => (
						<div key={i} className={style.itemContainer}>
							<div className={style.imgContainer}>
								<img
									className={style.img}
									src={item.image}
									alt={item.name}
								/>
							</div>
							<div className={style.descriptionContainer}>
								<div className={style.buttonContainer}>
									<button className={style.botonEliminar} onClick={() => handleDelete(i)}>
										X
									</button>
								</div>
								<h4 className={style.h4}>{item.name}</h4>
								<p className={style.p}>
									Precio: <strong>${item.price}</strong>
								</p>
								<p className={style.p}>Color: {item.color}</p>
								<p className={style.p}>Talle: {item.size}</p>
								<p className={style.p}>
									Cantidad: {item.cantidad}
								</p>
							</div>
						</div>
					))}
			{pagar ? (
				<button
					onClick={(e) => {
						onSubmit(e);
					}}
					className={style.botonComprar}
				>
					Confirmar
				</button>
			) : (
				<MercadoPago ids={cart} />
			)}
		</section>
	);
};

export default Cart;