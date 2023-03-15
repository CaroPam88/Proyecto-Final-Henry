const { sizeBdd } = require("../basesDeDatos/dataGeneral");

const getSize = async () => {
  const data = await sizeBdd();

  return data.map((elem) => {
    return {
      id: elem.id,
      size: elem.size,
      stockSize: elem.stockSize,
    };
  });
};

module.exports = { getSize };
