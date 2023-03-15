const { colorsBdd } = require("../basesDeDatos/dataGeneral");

const getColors = async () => {
  const data = await colorsBdd();

  return data.map((elem) => {
    return {
      id: elem.id,
      color: elem.color,
      stockColor: elem.stockColor,
    };
  });
};

module.exports = { getColors };
