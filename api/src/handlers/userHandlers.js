const {
	createUser,
	getUsersData,
	getUserByEmail,
	postInCart,
	deleteItem,
	putItem,
	deleteTheUser,
	getUserCart,
	getTheUserById,
	putTheLockUser,
} = require('../controllers/userControllers');

let postUserHandler = async (req, res) => {
	const {name, nickname, email, picture, admin} = req.body;

	try {
		const newUser = await createUser({
			name,
			nickname,
			email,
			picture,
			admin,
		});
		res.status(200).json(newUser);
	} catch (error) {
		console.error(error);
		res.status(500).json({message: 'Error al crear User'});
	}
};

let getUserHandler = async (req, res) => {
	try {
		let allUsers = await getUsersData();
		res.status(200).json(allUsers);
	} catch (error) {
		console.error(error);
		res.status(500).json({message: 'Error al traer usuarios'});
	}
};

let getUserByEmailHandler = async (req, res) => {
	let {email} = req.params;

	try {
		let user = await getUserByEmail(email);
		res.status(200).json(user);
	} catch (err) {
		res.status(404).json({error: err.message});
	}
};

let postCartItemHandler = async (req, res) => {
	const {id} = req.params;

	try {
		const user = await postInCart(id, req.body);
		res.status(201).json(user);
	} catch (error) {
		console.error(error);
		res.status(500).json({
			message: 'Error al agregar el artículo al carrito',
		});
	}
};

let deleteCartItemHandler = async (req, res) => {
	const {userId, itemId} = req.params;

	try {
		const deletedItem = await deleteItem(userId, itemId);
		res.status(200).json(deletedItem);
	} catch (error) {
		console.error(error);
		return res.status(500).send('Error al borrar cart');
	}
};

let putCartItemHandler = async (req, res) => {
	const {userId, cartIndex} = req.params;
	let {cantidad} = req.body;

	try {
		let newCart = await putItem(userId, cartIndex, cantidad);

		res.status(200).json(newCart);
	} catch (error) {
		console.error(error);
		return res
			.status(500)
			.json({message: 'Error al actualizar la cantidad del producto.'});
	}
};

let deleteUser = async (req, res) => {
	const {userId} = req.params;

	try {
		const deletedUser = await deleteTheUser(userId);
		res.status(200).json(deletedUser);
	} catch (error) {
		console.error(error);
		return res.status(500).send('Error al borrar el usuario');
	}
};

let getCart = async (req, res) => {
	const {userId} = req.params;

	console.log(userId);
	try {
		const cart = await getUserCart(userId);
		res.status(200).json(cart);
	} catch (error) {
		console.error(error);
		return res.status(500).send('Error al traer el carrito');
	}
};

let getUserById = async (req, res) => {
	const {userId} = req.params;
	try {
		const user = await getTheUserById(userId);
		res.status(200).json(user);
	} catch (error) {
		console.error(error);
		return res.status(500).send('Error al traer el usuario');
	}
};

let changeLockedState = async (req, res) => {
	const {userId} = req.params;

	try {
		const updatedUser = await putTheLockUser(userId);
		res.status(200).json(updatedUser);
	} catch (error) {
		console.error(error);
		return res.status(500).send('Error al cambiar el estado del usuario');
	}
};

module.exports = {
	postUserHandler,
	getUserHandler,
	getUserByEmailHandler,
	postCartItemHandler,
	deleteCartItemHandler,
	putCartItemHandler,
	deleteUser,
	getCart,
	getUserById,
	changeLockedState,
};
