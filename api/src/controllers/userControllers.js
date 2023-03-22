const {Clothes, Size, User} = require('../db');

const createUser = async ({name, nickname, email, picture, admin}) => {
	// Buscar si ya existe un usuario con el mismo correo electrónico
	const existingUser = await User.findOne({where: {email}});
	if (existingUser) {
		return {message: 'Usuario existente'};
	}

	// Si no existe, crear un nuevo usuario
	await User.create({name, nickname, email, picture, admin});
	return {message: 'Usuario agregado exitosamente'};
};

const getUsersData = async () => {
	const users = await User.findAll();
	return users;
};

module.exports = {createUser, getUsersData};