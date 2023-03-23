const {Clothes, Color, Size} = require('../db');
const {
	getClothesData,
	createProduct,
	getIdData,
	getGenderData,
	clothesUpdate,
} = require('../controllers/clothesControllers');
const { payMercadoPago } = require('../controllers/mercadopagoControllers')

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

let putProductHandler = async (req, res) => {
	let ids = req.body
    let {id} = req.params
    try {
        const  payClothes = await clothesUpdate(ids, id) 
		const  payPago = await payMercadoPago(ids, id)
        res.status(201).json(payClothes, payPago);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


module.exports = {
	getProductHandler,
	getProductByIdHandler,
	postProductHandler,
	putProductHandler,
	getProductByGenderHandler,
};
