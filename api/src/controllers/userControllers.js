const {Clothes, Size, User} = require('../db');
const sendEmail = require("../Cofig/mailer")

const createUser = async ({name, nickname, email, picture, admin}) => {
	try {
		// Buscar si ya existe un usuario con el mismo correo electrónico
	const existingUser = await User.findOne({where: {email}});
	if (existingUser) {
		return existingUser;
	}else {
		// Si no existe, crear un nuevo usuario
		let newUser = (await User.create({name, nickname, email, picture, admin})).dataValues;
		await sendEmail(newUser)
		return newUser;
	}
	} catch (error) {
		return {error : error.message};	
	}
};

const getUsersData = async () => {
	const users = await User.findAll();
	return users;
};

const getUserByEmail = async (email) => {

	let userId = await User.findOne({where: {email}});
	if (userId) {
		return userId;
	} else {
		return('usuario no encontrado');
	}
};

module.exports = {createUser, getUsersData, getUserByEmail};
