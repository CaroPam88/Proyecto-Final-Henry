const { Clothes, Color, Size } = require("../db");
const {
  getClothesData,
  createProduct,
} = require("../controllers/clothesControllers");

let getProductHandler = async (req, res) => {
  let clothes = req.query.clothes;

  if (clothes) {
    try {
      let searchClothes = await getClothesData(clothes);

      res.status(200).json(searchClothes);
    } catch (err) {
      res.status(404).json({ error: err.message });
    }
  } else {
    let allClothes = await getClothesData();
    res.status(200).json(allClothes);
  }
};

let getProductByIdHandler = () => {};

let postProductHandler = async (req, res) => {
  const { name, price, type, image, sex, stockGeneral, size, color } = req.body;
  console.log(color);
  try {
    const newProduct = await createProduct(
      name,
      price,
      type,
      image,
      sex,
      stockGeneral,
      size,
      color
    );
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

let patchProductHandler = () => {};
patchProductHandler;

module.exports = {
  getProductHandler,
  getProductByIdHandler,
  postProductHandler,
  patchProductHandler,
};
