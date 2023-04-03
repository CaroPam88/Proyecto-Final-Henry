import {useSelector, useDispatch} from 'react-redux';
import {
	getAllTheUsers,
	changeTheUserlocked,
} from '../../../../../Redux/actionUser';
import {useEffect} from 'react';
import style from './AllUsers.module.css';
import {Link} from 'react-router-dom';
import hero3 from '../../../../../Assets/img/hero3.jpg';

function AllUsers() {
	let dispatch = useDispatch();

	let users = useSelector((state) => state.user.allUsers);

	useEffect(() => {
		dispatch(getAllTheUsers());
	}, [users.locked]);

	let handleLock = (e,id) => {
		dispatch(changeTheUserlocked(id))
		.then(() =>dispatch(getAllTheUsers()));
	};

	return (
		<section>
			<img src={hero3} alt="found" className={style.found} />
			<div className={style.return}>
            <Link to={'/admin/dashboard'} className={style.Link} >
            <h6>{'<<'}</h6>
            </Link>
        </div>
			<table className={style['users-table']}>
				<thead>
					<tr>
						<th>Photo</th>
						<th>Name</th>
						<th>NickName</th>
						<th>Email</th>
						<th>Block</th>
						<th>Shopping Information</th>
					</tr>
				</thead>
				<tbody>
					{users.map((user) => (
						<tr key={user.id}>
							<td>
								<img
									className={style.perfil_Img}
									src={user.picture}
									alt={user.name}
								/>
							</td>
							<td>{user.name}</td>
							<td>{user.nickname}</td>
							<td>{user.email}</td>
							<td>
								<label className={style.switch}>
									<input
										type="checkbox"
										className={style.checkbox}
										checked={user.locked}
										onChange={(e) => handleLock(e,user.id)}
									/>
									<div className={style.slider}></div>
								</label>
							</td>
							<td>
								<Link to={`/admin/detailUser/${user.id}`}>
									<span className={style.info}>
										More Information
									</span>
								</Link>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</section>
	);
}

export default AllUsers;
