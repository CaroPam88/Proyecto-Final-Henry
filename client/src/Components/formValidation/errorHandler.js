function validateError(input) {
	let error = {};

	if (!input.name.trim()) error.name = 'Insert Name';
	else if (!/^[A-Za-zñÑáéíóúÁÉÍÓÚ\s]+$/.test(input.name))
		error.name = 'The name is not Valid';
	if (!input.image) error.image = 'Insert an Image';
	if (!input.type) error.type = 'Choose a Type';
	if (!input.price) error.price = 'Insert a Price';
	if (!input.image) error.image = 'Insert an Image';
	if (input.sex.length === 0) error.sex = 'Choose a Gender';
	if (!input.size) error.size = 'Insert a Size';
	if (!input.amount) error.amount = 'Insert an Amount';
	if (input.colors.length === 0) error.colors = 'Insert a Color';

	return error;
}

function validateColorError(input) {
	let colorError = {};

	if(!input.color) colorError.nameColor = 'Insert a name';
	else if(!/^[A-Za-zñÑáéíóúÁÉÍÓÚ\s]+$/.test(input.color))  colorError.nameColor = 'Invalid color name';
	if(!input.stockColors) colorError.sizeColor = 'Insert a stook for color';
	if(input.stockColors <= 0 ) colorError.sizeColor = 'Invalid a stook for color';

	return colorError;
};

function validate(input) {
	let validated = {};

	if (input.name) validated.name = ' ✔ validated name';
	else if (!/^[A-Za-zñÑáéíóúÁÉÍÓÚ\s]+$/.test(input.name)) validated.name = '✔ validated name';
	if (input.image) validated.image = '✔ validated image';
	if (input.type) validated.type = '✔ validated type';
	if (input.price) validated.price = '✔ validated price';
	if (input.image) validated.image = '✔ validated image';
	if (input.sex.length > 0) validated.sex = '✔ validated genre';
	if (input.size) validated.size = '✔ validated stock';
	if (input.amount) validated.amount = '✔ validated';
	if (input.colors.length > 0) validated.colors = '✔ validated color';

	return validated;
}

export {validate, validateError, validateColorError};
