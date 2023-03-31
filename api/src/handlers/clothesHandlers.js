const {Clothes, Color, Size} = require('../db');
const {
	getClothesData,
	createProduct,
	getIdData,
	getGenderData,
	clothesUpdate,
	generalUpdate,
} = require('../controllers/clothesControllers');
const {payMercadoPago} = require('../controllers/mercadopagoControllers');

let getProductHandler = async (req, res) => {
	let clothes = req.query.name;

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

////////////////////////////////////////////////////

let getProductByIdHandler = async (req, res) => {
	let {id} = req.params;

	try {
		let clothe = await getIdData(id);
		res.status(200).json(clothe);
	} catch (err) {
		res.status(404).json({error: err.message});
	}
};

//////////////////////////////////////////////////////

let postProductHandler = async (req, res) => {
	const {
		name,
		price,
		type,
		image,
		sex,
		stockGeneral,
		stockSize,
		size,
		colors,
		existing,
	} = req.body;

	try {
		const newProduct = await createProduct(
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
		);
		res.status(201).json(newProduct);
	} catch (error) {
		res.status(400).json({error: error.message});
	}
};

let getProductByGenderHandler = async (req, res) => {
	let {gender} = req.params;

	try {
		let clothe = await getGenderData(gender);
		res.status(200).json(clothe);
	} catch (err) {
		res.status(404).json({error: err.message});
	}
};

////////////////////////////////////////

let putProductHandler = async (req, res) => {
	try {
		let ids = req.body;
		const payClothes = await clothesUpdate(ids);
		res.status(201).json(payClothes);
	} catch (error) {
		console.log(error.message);
		res.status(400).json({error: error.message});
	}
};

///////////////////////////////////////

let postMercadoPago = async (req, res) => {
	try {
		let ids = req.body;
		let id = ids.id;
		console.log('back', ids);
		const payPago = await payMercadoPago(ids);
		res.send(payPago);
	} catch (error) {
		console.log(error.message);
		res.status(405).json({error: error.message});
	}
};

let UpdateClothes = async (req, res) => {
	let {idItem} = req.params;
	const {name, price, type, image, sex, size, colors} = req.body;

	console.log(req.body);

	try {
		let clothe = await generalUpdate(
			idItem,
			name,
			price,
			type,
			image,
			sex,
			size,
			colors
		);
		res.status(200).json(clothe);
	} catch (error) {
		console.log(error);
		res.status(404).json({error: error.message});
	}
};

module.exports = {
	getProductHandler,
	getProductByIdHandler,
	postProductHandler,
	putProductHandler,
	getProductByGenderHandler,
	postMercadoPago,
	UpdateClothes,
};

// await Clothes.update(
// 	{
// 		stockGeneral: req.body.stockGeneral,
// 		stockSize: req.body.stockSize,
// 		size: req.body.size,
// 		colors: req.body.colors,
// 	},
// 	{
// 		where: {
// 			id: idItem,
// 		},
// 	}
// );
