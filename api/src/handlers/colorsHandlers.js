const { getColors } = require("../controllers/colorsControllers");

const getColorsHandlers = async (req, res) => {
  try {
    const resultado = await getColors();
    res.status(200).json(resultado);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = {getColorsHandlers}