const {
	createUser,
	getUsersData,
	getUserByEmail,
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
		res.status(500).json({message: 'Internal Server Error'});
	}
};

let getUserHandler = async (req, res) => {
	try {
		let allUsers = await getUsersData();
		res.status(200).json(allUsers);
	} catch (error) {
		console.error(error);
		res.status(500).json({message: 'Internal server error'});
	}
};

let getUserByEmailHandler = async (req, res) => {
	console.log('estoy en el handler');
	let {email} = req.params;

	try {
		let user = await getUserByEmail(email);
		res.status(200).json(user);
	} catch (err) {
		res.status(404).json({error: err.message});
	}
};

module.exports = {postUserHandler, getUserHandler, getUserByEmailHandler};
