import {useSelector, useDispatch} from 'react-redux';
import {
	getUserByTheId,
	changeTheUserlocked,
} from '../../../../../Redux/actionUser';
import {useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';
import style from './DetailUser.module.css';
import hero3 from '../../../../../Assets/img/hero3.jpg';

import NotAdmin from "../../../Components/NotAdmin/NotAdmin";
import { useAuth0 } from '@auth0/auth0-react';

function DetailUser() {
	const dispatch = useDispatch();
	const {id} = useParams();
	const user = useSelector((state) => state.user.userId);
	const theUser = useSelector(state => state.user.theUser)
	const { isAuthenticated } = useAuth0();

	useEffect(() => {
		dispatch(getUserByTheId(id));

	}, []);

	let handleLock = (id) => {
		dispatch(changeTheUserlocked(id)).then(() =>
			dispatch(getUserByTheId(id))
		);
	};


	if (theUser.id && !theUser.admin) return (
        <NotAdmin />
    )
    else return (
		<section>
			<img src={hero3} alt="found" className={style.found} />
			<div className={style.container}>
			<Link to='/admin/allUsers' className={style.return} >
                    <h6>{'<<'}</h6>
            </Link>
				<div className={style.details}>
					<div className={style.detailsContainer}>
						<h3>Cart</h3>
						<div className={style.cartContainer}>
							<table className={style.tableCart}>
								<thead>
									<tr>
										<th>Product</th>
										<th>Amount</th>
										<th>Price</th>
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
						<h3>Shopping History</h3>
						<div className={style.historyContainer}>
							<table className={style.tableHistory}>
								<thead>
									<tr>
										<th>Product</th>
										<th>Amount</th>
										<th>Price</th>
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
								NickName: {user.nickname}
							</p>
							State:
							{user.locked ? 'Disabled' : 'Enabled'}{' '}
							<label
								className={style.switch}
							>
								<input
									type="checkbox"
									className={style.checkbox}
									checked={user.locked}
									onChange={() => handleLock(user.id)}
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
