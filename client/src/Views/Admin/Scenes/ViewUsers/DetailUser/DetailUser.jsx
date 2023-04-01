import {useSelector, useDispatch} from 'react-redux';
import {
	getUserByTheId,
	changeTheUserlocked,
} from '../../../../../Redux/actionUser';
import {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import style from './DetailUser.module.css';

function DetailUser() {
	const dispatch = useDispatch();
	const {id} = useParams();
	const user = useSelector((state) => state.user.userId);

	console.log(user);

	useEffect(() => {
		dispatch(getUserByTheId(id));
	}, [user.locked]);

	let handleLock = (id) => {
		dispatch(changeTheUserlocked(id)).then(() =>
			dispatch(getUserByTheId(id))
		);
	};

	return (
		<section>
			<div className={style.container}>
				<div className={style.details}>
					<div className={style.detailsContainer}>
						<div className={style.cartContainer}>
							<h3>Carrito</h3>
							<table className={style.tableCart}>
								<thead>
									<tr>
										<th>Producto</th>
										<th>Cantidad</th>
										<th>Precio</th>
										<th>Color</th>
									</tr>
								</thead>
								<tbody>
									{user.cart?.map((item) => (
										<tr key={item.cartIndex}>
											<td>{item.name}</td>
											<td>{item.cantidad}</td>
											<td>${item.price}</td>
											<td>{item.color}</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
						<div className={style.historyContainer}>
							<h3>Historial de Compras</h3>
							<table className={style.tableHistory}>
								<thead>
									<tr>
										<th>Producto</th>
										<th>Cantidad</th>
										<th>Precio</th>
										<th>Color</th>
									</tr>
								</thead>
								<tbody>
									{user.history?.map((item) => (
										<tr key={item.cartIndex}>
											<td>{item.name}</td>
											<td>{item.cantidad}</td>
											<td>${item.price}</td>
											<td>{item.color}</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					</div>
					<div className={`${style.card} ${style.details}`}>
						<img
							className={style.picture}
							src={user.picture}
							alt={user.name}
						/>
						<div className={style.userinfo}>
							<h2 className={style.name}>{user.name}</h2>
							<p className={style.email}>Email: {user.email}</p>
							<p className={style.nickname}>
								Apodo: {user.nickname}
							</p>
							Estado:
							{user.locked ? 'Deshabilitado' : 'Habilitado'}{' '}
							<label
								className={style.switch}
								onClick={() => handleLock(user.id)}
							>
								<input
									type="checkbox"
									className={style.checkbox}
									checked={user.locked}
								/>
								<div className={style.slider}></div>
							</label>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default DetailUser;
