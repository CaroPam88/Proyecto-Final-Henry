const {Clothes, Size, User} = require('../db');
const sendEmail = require('../Cofig/mailer');

const createUser = async ({name, nickname, email, picture, admin}) => {
	try {
		// Buscar si ya existe un usuario con el mismo correo electrónico
		const existingUser = await User.findOne({where: {email}});
		if (existingUser) {
			return existingUser;
		} else {
			// Si no existe, crear un nuevo usuario
			let newUser = (
				await User.create({name, nickname, email, picture, admin})
			).dataValues;
			await sendEmail(newUser);
			return newUser;
		}
	} catch (error) {
		return {error: error.message};
	}
};

const getUsersData = async () => {
	const users = await User.findAll();
	return users;
};

const getUserByEmail = async (email) => {
	let userEmail = await User.findOne({where: {email}});
	console.log(userEmail);
	if (userEmail) {
		return userEmail;
	} else {
		return 'usuario no encontrado';
	}
};

const postInCart = async (id, clothe) => {
	// Obtener el usuario correspondiente
	const user = await User.findOne({where: {id}});

	// Agregar el artículo al carrito del usuario
	if (Array.isArray(clothe)) {
        clothe.forEach((item) => {
            user.cart.push(item);
        });
    } else {
        user.cart.push(clothe);
    }

	// Actualizar el registro del usuario en la base de datos
	await User.update({cart: user.cart}, {where: {id}});

	return user;
};

module.exports = {createUser, getUsersData, getUserByEmail, postInCart};
