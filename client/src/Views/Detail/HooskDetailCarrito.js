import {useDispatch, useSelector} from 'react-redux';
import {useState} from 'react';
import {putClothes} from '../../Redux/ActionsGet';
import {addProductUser} from '../../Redux/actionUser';
import {addCartProduct} from '../../Redux/actionCart';
import {useAuth0} from '@auth0/auth0-react';

export const useDetail = (myProduct, id) => {
	const [compra, setCompra] = useState({
		id: id,
		name: myProduct.name,
		price: myProduct.price,
		color: '',
		size: '',
		cantidad: 1,
	});

	const dispatch = useDispatch();
	const userSelector = useSelector((state) => state.user.theUser);
	console.log('user', userSelector);
	const {isAuthenticated} = useAuth0();
	// const cart = useSelector(state => state.cart.cartItems)

	const saveLocal = (cart) => {
		localStorage.setItem('cart', JSON.stringify(cart));
	};
	let cartLocal = [];
	if (JSON.parse(localStorage.getItem('cart'))) {
		cartLocal = JSON.parse(localStorage.getItem('cart'));
	}

	const handlerDetail = (e) => {
		const target = e.target.name;
		const value = e.target.value;
		target === 'cantidad'
			? setCompra({
					...compra,
					cantidad: Number(e.target.value),
			  })
			: setCompra({
					...compra,
					[target]: value,
			  });
	};

	const buttonComprar = (e) => {
		setCompra({
			...compra,
			id: myProduct.id,
			price: myProduct ? myProduct.price : 'error',
		});
		dispatch(putClothes(compra));
		alert('compra exitosa');
	};

	const buttonAgregarAlCarrito = (e) => {
		const colores = myProduct
			? myProduct.sizes?.flatMap((el) => el.colors[0].color)
			: 'no colors';
		const talla = myProduct
			? myProduct.sizes?.flatMap((el) => el.size)
			: 'no sizes found';
		const nuevoProducto = {
			...compra,
			id: myProduct.id,
			name: myProduct.name,
			price: myProduct.price,
			color: compra.color === '' ? colores[0] : compra.color,
			size: compra.size === '' ? talla[0] : compra.size,
			cantidad: compra.cantidad,
		};
		console.log('HOOK', nuevoProducto);
		dispatch(addCartProduct(nuevoProducto)); // dispatch addToCart action creator
		if (!userSelector.id && !isAuthenticated)
			saveLocal([...cartLocal, nuevoProducto]);
		else if (userSelector.id && isAuthenticated)
			dispatch(addProductUser(nuevoProducto));
	};

	const elCarrito = useSelector((state) => state.cart.cartItems); // aca estoy
	console.log('elCarrito', elCarrito);

	const [pagar, setPagar] = useState(true);
	const onSubmit = async (e) => {
		e.preventDefault();
		setPagar(false);
	};

	return {
		pagar,
		compra,
		buttonComprar,
		handlerDetail,
		buttonAgregarAlCarrito,
		onSubmit,
	};
};
