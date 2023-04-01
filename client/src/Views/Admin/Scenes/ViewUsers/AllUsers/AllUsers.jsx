import {useSelector, useDispatch} from 'react-redux';
import {getAllTheUsers} from '../../../../../Redux/actionUser';

function AllUsers() {
	let dispatch = useDispatch();
	dispatch(getAllTheUsers());
	let users = useSelector((state) => state.user.allUsers);
	console.log(users);

	return (
		<div>
			{users.map((user) => (
				<div key={user.id}>{user.name}</div>
			))}
		</div>
	);
}

export default AllUsers;
