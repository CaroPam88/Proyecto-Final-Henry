const { Clothes, Size, Colors } = require("../db");

let getClothesData = async (searchClothe) => {
  const clothesData = await Clothes.findAll({
    include: [
      {
        model: Size,
        attributes: ["size", "stockSize"],
        through: {
          attributes: [],
        },
      },
      {
        model: Colors,
        attributes: ["color", "stockColor"],
        through: {
          attributes: [],
        },
      },
    ],
  });

  if (searchClothe) {
    const clothes = clothesData.filter((e) =>
      e.name.toLowerCase().includes(searchClothe.toLowerCase())
    );

    if (!clothes.length) {
      throw Error("Prenda no encontrada");
    }

    return clothes;
  }

  return clothesData;
};

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
  let sizeDb = await Size.findAll({ where: { size: size } });

  create.addSize(sizeDb);
  console.log(price);
  let colorDb = await Colors.findAll({ where: { color: color } });

  create.addColors(colorDb);
  return { message: "Product Create !!!!!" };
};

module.exports = { getClothesData, createProduct };
