const { getSize } = require("../controllers/sizeControllers");

const getSizeHandler = async (req, res) => {
  try {
    const resultado = await getSize();
    res.status(200).json(resultado);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};



module.exports = { getSizeHandler, };
