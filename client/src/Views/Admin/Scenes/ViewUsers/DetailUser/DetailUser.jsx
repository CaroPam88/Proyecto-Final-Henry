import {useSelector, useDispatch} from 'react-redux';
import {getUserByTheId} from '../../../../../Redux/actionUser';
import {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import style from './DetailUser.module.css';

function DetailUser() {
	const dispatch = useDispatch();
	const {id} = useParams();

	useEffect(() => {
		dispatch(getUserByTheId(id));
	}, []);

	const user = useSelector((state) => state.user.userId);

	return (
		<div className={style.container}>
			<div className={style.card}>
				<h2 className={style.name}>{user.name}</h2>
				<p className={style.email}>{user.email}</p>
				<p className={style.nickname}>{user.nickname}</p>
				<img
					className={style.picture}
					src={user.picture}
					alt={user.name}
				/>
			</div>
			<div className={style.cart}>
				<h3>Carrito</h3>
				<ul>
					{user.cart.map((item) => (
						<li key={item.cartIndex}>
							{item.name} ({item.cantidad}) - ${item.price}
						</li>
					))}
				</ul>
			</div>
			<div className={style.history}>
				<h3>Historial de Compras</h3>
				<ul>
					{user.history.map((item) => (
						<li key={item.cartIndex}>
							{item.name} ({item.cantidad}) - ${item.price}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}

export default DetailUser;
