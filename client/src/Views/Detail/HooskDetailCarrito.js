import {useDispatch, useSelector} from 'react-redux';
import {useState} from 'react';
import {putClothes} from '../../Redux/ActionsGet';
import {addProductUser} from '../../Redux/actionUser';
import {addCartProduct} from '../../Redux/actionCart';
import {useAuth0} from '@auth0/auth0-react';

export const useDetail = (myProduct, id) => {
	
	const [viewInput, setViewInput] = useState(false);
	const [viewInputValue, setViewInputValue] = useState({
		cantidad: 7,
	});
	const [compra, setCompra] = useState({
		id: id,
		name: myProduct.name,
		image: myProduct.image,
		price: myProduct.price,
		color: '',
		size: '',
		cantidad: 1,
	});
	
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
		image: myProduct.image,
		price: parseInt(myProduct.price),
		color: compra.color === '' ? `${colores}` : compra.color,
		size: compra.size === '' ? `${talla}` : compra.size,
		cantidad: compra.cantidad > 0 ? compra.cantidad : 1,
	};

	const dispatch = useDispatch();
	const userSelector = useSelector((state) => state.user.theUser);

	const {isAuthenticated, loginWithRedirect} = useAuth0();

	const saveLocal = (cart) => {
		localStorage.setItem('cart', JSON.stringify(cart));
	};
	let cartLocal = [];
	if (JSON.parse(localStorage.getItem('cart'))) {
		cartLocal = JSON.parse(localStorage.getItem('cart'));
	}
	const handlerSetViewValue = (e) => {
		const value = e.target.value;
		setViewInputValue({cantidad: value});
	};
	const handlerDetail = (e) => {
		const target = e.target.name;
		const value = e.target.value;
		if(value === 'otherValue'){
			setCompra({
				...compra,
				cantidad: 7,
			});
			setViewInput(true)
		};
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
			image: myProduct.image,
			price: myProduct.price,
			color: compra.color === '' ? colores[0] : compra.color,
			size: compra.size === '' ? talla[0] : compra.size,
			cantidad: compra.cantidad > 0 ? compra.cantidad : 1,
		};
		setCompra({
			...compra,
			id: myProduct.id,
			price: myProduct ? myProduct.price : 'error',
		});
		dispatch(putClothes(nuevoProducto));
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
			image: myProduct.image,
			price: myProduct.price,
			color: compra.color === '' ? colores[0] : compra.color,
			size: compra.size === '' ? talla[0] : compra.size,
			cantidad: compra.cantidad > 0 ? compra.cantidad : 1,
		};

		dispatch(addCartProduct(nuevoProducto)); // dispatch addToCart action creator
		if (!userSelector.id && !isAuthenticated)
			saveLocal([...cartLocal, nuevoProducto]);
		else if (userSelector.id && isAuthenticated)
			dispatch(addProductUser(nuevoProducto));
	};


	const [pagar, setPagar] = useState(true);
	const onSubmit = async (e) => {
		try {
			e.preventDefault();
			if (userSelector.id) {
				setPagar(false);
			} else {
				loginWithRedirect();
			}
		} catch (error) {
			console.log(error);
		}
	};

	return {
		pagar,
		compra,
		viewInput,
		viewInputValue,
		setViewInput,
		setViewInputValue,
		handlerSetViewValue,
		buttonComprar,
		nuevoProducto,
		handlerDetail,
		buttonAgregarAlCarrito,
		onSubmit,
	};
};
