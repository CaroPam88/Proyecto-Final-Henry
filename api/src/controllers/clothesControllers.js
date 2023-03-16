const { Clothes, Size, Colors } = require("../db");

const { clothesBdd } = require("../basesDeDatos/dataGeneral");

let getClothesData = async (searchClothe) => {
  const clothesData = await clothesBdd();

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

////////////////////////////////////////

let getIdData = async (id) => {
  const clothesData = await getClothesData();

  let dataId = clothesData.find((e) => e.id == id);

  if (dataId) {
    return dataId;
  } else {
    throw Error("Prenda no encontrado");
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
      return (acc += item);
    });
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

  return { message: "Product Create !!!!!" };
};

module.exports = { getClothesData, getIdData, createProduct };
