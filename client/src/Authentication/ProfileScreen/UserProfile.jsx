import {useAuth0} from '@auth0/auth0-react';
import AuthenticationButton from '../Components/AuthenticationButton';
import {getUserByEmail} from '../../Redux/actionUser';
import style from '../ProfileScreen/UserProfile.module.css';
import imgHome from '../../Assets/img/hero3.jpg';
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';

const UserProfile = () => {
	const {user, isAuthenticated, isLoading} = useAuth0();

	const dispatch = useDispatch();

	const theUser = useSelector((state) => state.user.theUser);

	if (isLoading) {
		return (
			<div className={style.loader}>
				<div className={style.circle}></div>
				<div className={style.circle}></div>
				<div className={style.circle}></div>
				<div className={style.circle}></div>
			</div>
		);
	}

	return (
		isAuthenticated && (
			<div className={style.container}>
				<div className={style.profile}>
					<div className={style.profileImage}>
						<img src={theUser.picture} alt="Profile Picture" />
					</div>
					<div className={style.profileInfo}>
						<h2>{theUser.name}</h2>
						<p>{theUser.email}</p>
					</div>
					<AuthenticationButton />
				</div>

				<div className={style.history}>
					<h3>Purchase History</h3>
					<table>
						<thead>
							<tr>
								<th>Image</th>
								<th>Name</th>
								<th>Price</th>
								<th>Color</th>
								<th>Size</th>
								<th>Quantity</th>
							</tr>
						</thead>
						<tbody>
							{theUser.history?.map((item) => (
								<tr key={item.id}>
									<td className={style.imgclothe}>
										<img src={item.image} alt={item.name} />
									</td>
									<td>{item.name}</td>
									<td>${item.price}</td>
									<td>{item.color}</td>
									<td>{item.size}</td>
									<td>{item.cantidad}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
				<div className={style.cart}>
					<h3>Cart</h3>
					<table>
						<thead>
							<tr>
								<th>Image</th>
								<th>Name</th>
								<th>Price</th>
								<th>Color</th>
								<th>Size</th>
								<th>Quantity</th>
							</tr>
						</thead>
						<tbody>
							{theUser.cart?.map((item) => (
								<tr key={item.cartIndex}>
									<td className={style.imgclothe}>
										<img src={item.image} alt={item.name} />
									</td>
									<td>{item.name}</td>
									<td>${item.price}</td>
									<td>{item.color}</td>
									<td>{item.size}</td>
									<td>{item.cantidad}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		)
	);
};

export default UserProfile;
