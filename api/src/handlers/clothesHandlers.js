const {Clothes, Color, Size} = require('../db');
const {getClothesData} = require('../controllers/clothesControllers');

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

let getProductByIdHandler = () => {};
let postProductHandler = () => {};
let patchProductHandler = () => {};
patchProductHandler;

module.exports = {
	getProductHandler,
	getProductByIdHandler,
	postProductHandler,
	patchProductHandler,
};
