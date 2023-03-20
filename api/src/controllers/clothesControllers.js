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
	stockSize,
	size,
	colors,
	existing
) => {
	const ajuste = colors
		.map((elem) => elem.stockColors)
		.reduce((acc, item) => {
			return acc + parseInt(item);
		}, 0);
	stockGeneral = ajuste;
	stockSize = ajuste;

	existing = stockSize > 0 ? true : false;

	let create = await Clothes.create({
		name,
		price,
		type,
		image,
		sex,
		stockGeneral,
		existing,
	});
	let createTalla = await Size.create({
		size,
		stockSize,
		colors,
	});

	create.addSize(createTalla);

	return {message: 'Product Create !!!!!'};
};

let getGenderData = async (gender) => {
	const clothesData = await getClothesData();

	const filteredData = clothesData.filter((item) =>
		item.sex.includes(gender)
	);

	if (filteredData.length === 0) {
		throw new Error('Genero no encontrado');
	}

	return filteredData;
};

module.exports = {getClothesData, getIdData, createProduct, getGenderData};
