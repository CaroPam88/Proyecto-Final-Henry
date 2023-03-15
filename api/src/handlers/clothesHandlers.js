const {Clothes, Color, Size} = require('../db');
const {
	getClothesData,
	getIdData,
} = require('../controllers/clothesControllers');

let getProductHandler = async (req, res) => {
	let clothes = req.query.clothes;

	console.log(clothes);
	if (clothes) {
		try {
			let searchClothes = await getClothesData(clothes);

			res.status(200).json(searchClothes);
		} catch (err) {
			res.status(404).json({error: err.message});
		}
	} else {
		let allClothes = await getClothesData();
		res.status(200).json(allClothes);
	}
};

///////////////////////////////////////

let getProductByIdHandler = async (req, res) => {
	let {id} = req.params;

	try {
		let clothe = await getIdData(id);
		res.status(200).json(clothe);
	} catch (err) {
		res.status(404).json({error: err.message});
	}
};

module.exports = {
	getProductHandler,
	getProductByIdHandler,
};
