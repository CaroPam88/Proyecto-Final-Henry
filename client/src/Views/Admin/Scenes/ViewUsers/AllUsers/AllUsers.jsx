import {useSelector, useDispatch} from 'react-redux';
import {getAllTheUsers} from '../../../../../Redux/actionUser';
import {useEffect} from 'react';
import style from './AllUsers.module.css';
import {Link} from 'react-router-dom';

function AllUsers() {
	let dispatch = useDispatch();

	let users = useSelector((state) => state.user.allUsers);

	useEffect(() => {
		dispatch(getAllTheUsers());
	}, []);

	return (
		<table className={style['users-table']}>
			<thead>
				<tr>
					<th>Foto de Pefil</th>
					<th>Nombre</th>
					<th>Apodo</th>
					<th>Email</th>
					<th>Bloqueado</th>
					<th>Info de compra</th>
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
						<td>{user.blocked ? 'Si' : 'No'}</td>
						<Link to={`/admin/detailUser/${user.id}`}>
							<td>Mas info</td>
						</Link>
					</tr>
				))}
			</tbody>
		</table>
	);
}

export default AllUsers;
