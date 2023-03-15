const {Clothes, Size, Colors} = require('../db');

const {clothesBdd} = require('../basesDeDatos/dataGeneral');

let getClothesData = async (searchClothe) => {
	const clothesData = await clothesBdd();

	if (searchClothe) {
		const clothes = clothesData.filter((e) =>
			e.name.toLowerCase().includes(searchClothe.toLowerCase())
		);

		if (!clothes.length) {
			throw Error('Prenda no encontrada');
		}

		return clothes;
	}

	return clothesData;
};

////////////////////////////////////////

let getIdData = async (id) => {
	const clothesData = await getClothesData();

	let dataId = clothesData.find((e) => e.id == id);

	if (dataId) {
		return dataId;
	} else {
		throw Error('Prenda no encontrado');
	}
};

/////////////////////////////////////////////

const createProduct = async (
	name,
	price,
	type,
	image,
	sex,
	stockGeneral,
	size,
	color
) => {
	let create = await Clothes.create({
		name,
		price,
		type,
		image,
		sex,
		stockGeneral,
	});
	let sizeDb = await Size.findAll({where: {size: size}});

	create.addSize(sizeDb);
	console.log(price);
	let colorDb = await Colors.findAll({where: {color: color}});

	create.addColors(colorDb);
	return {message: 'Product Create !!!!!'};
};

module.exports = {getClothesData, getIdData, createProduct};
