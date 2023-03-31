function validateError(input) {
	let error = {};

	if (!input.name.trim()) error.name = ' Coloque un Nombre';
	else if (!/^[A-Za-zñÑáéíóúÁÉÍÓÚ\s]+$/.test(input.name))
		error.name = 'El nombre no es válido';
	if (!input.image) error.image = 'Cargue una Imagen';
	if (!input.type) error.type = 'Elija un Tipo';
	if (!input.price) error.price = 'Coloque un Precio';
	if (!input.image) error.image = 'Cargue una imagen';
	if (input.sex.length === 0) error.sex = 'Escoja un Género';
	if (!input.size) error.size = 'Seleccione un Talle';
	if (!input.amount) error.amount = 'Coloque una Cantidad';
	if (input.colors.length === 0) error.colors = 'Agregue un Color';

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
