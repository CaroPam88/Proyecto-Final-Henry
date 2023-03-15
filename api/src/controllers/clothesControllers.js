const {Clothes, Colors} = require('../db');

let getClothesData = async (searchClothe) => {
	const clothesData = await Clothes.findAll({
		include: {
			model: Colors,
			attributes: ['name', 'size', 'stock'],
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
