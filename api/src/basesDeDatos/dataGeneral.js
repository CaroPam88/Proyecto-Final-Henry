const { Size, Colors } = require("../db");

const sizeArray = [
  {
    size: "S",
    stock: 1,
  },
  {
    size: "M",
    stock: 1,
  },
  {
    size: "L",
    stock: 1,
  },
  {
    size: "XL",
    stock: 1,
  },
  {
    size: "XXL",
    stock: 1,
  },
];

const colorArray = [
  {
    color: "negro",
    stockColor: 1,
  },
  {
    color: "blanco",
    stockColor: 1,
  },
  {
    color: "azul",
    stockColor: 1,
  },
  {
    color: "amarillo",
    stockColor: 1,
  },
  {
    color: "rojo",
    stockColor: 1,
  },
];

const sizeBdd = async () => {
  for (const iterator of sizeArray) {
    await Size.findOrCreate({
      where: {
        size: iterator.size,
        stockSize: iterator.stock,
      },
    });
  }

  const allSize = await Size.findAll();

  return allSize || "err";
};

const colorsBdd = async () => {
  for (const iterator of colorArray) {
    await Colors.findOrCreate({
      where: {
        color: iterator.color,
        stockColor: iterator.stockColor,
      },
    });
  }

  const allColors = await Colors.findAll();

  return allColors || "err";
};
module.exports = { sizeBdd, colorsBdd };
