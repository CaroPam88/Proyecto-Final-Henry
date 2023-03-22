const {Clothes, Size, User} = require('../db');
const sendEmail = require("../Cofig/mailer")

const createUser = async ({name, nickname, email, picture, admin}) => {
	// Buscar si ya existe un usuario con el mismo correo electrónico
	const existingUser = await User.findOne({where: {email}});
	if (existingUser) {
		return {message: 'Usuario existente'};
	}

	// Si no existe, crear un nuevo usuario
	let newUser = await User.create({name, nickname, email, picture, admin});
	console.log(newUser.dataValues);
	sendEmail(newUser.dataValues)
	return {message: 'Usuario agregado exitosamente'};
};

const getUsersData = async () => {
	const users = await User.findAll();
	return users;
};

module.exports = {createUser, getUsersData};
