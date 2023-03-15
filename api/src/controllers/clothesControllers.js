const {Clothes, Size} = require('../db');

let getClothesData = async (searchClothe) => {
	const clothesData = await Clothes.findAll({
		include: {
			model: Size,
			attributes: ['size', 'colors', 'stock'],
			through: {
				attributes: [],
			},
		},
	});

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

module.exports = {getClothesData};
