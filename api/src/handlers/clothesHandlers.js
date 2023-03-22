const {
	getClothesData,
	createProduct,
	getIdData,
	getGenderData,
} = require('../controllers/clothesControllers');

let getProductHandler = async (req, res) => {
	let clothes = req.query.name;

	if (clothes) {
		try {
			let searchClothes = await getUserData(clothes);

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

app.put('/clothes/:id/stock', async (req, res) => {
	const {id} = req.params;
	const {stockGeneral, sizes} = req.body;

	try {
		const product = await Clothes.findByPk(id);
		if (!product) {
			return res.status(404).send('Producto no encontrado');
		}

		await product.update({stockGeneral});

		for (const size of sizes) {
			const [updatedSize] = await Size.update(
				{
					stockSize: size.stockSize,
					colors: size.colors,
				},
				{
					where: {
						clothesId: id,
						size: size.size,
					},
				}
			);

			if (!updatedSize) {
				await Size.create({
					clothesId: id,
					size: size.size,
					stockSize: size.stockSize,
					colors: size.colors,
				});
			}
		}

		return res.send('Stock actualizado correctamente');
	} catch (error) {
		console.error(error);
		return res
			.status(500)
			.send('Ha ocurrido un error al actualizar el stock');
	}
});

let patchProductHandler = () => {};
patchProductHandler;

module.exports = {
	getProductHandler,
	getProductByIdHandler,
	postProductHandler,
	patchProductHandler,
	getProductByGenderHandler,
};
