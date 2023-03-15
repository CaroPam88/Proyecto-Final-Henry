const { Router } = require("express");
const { getColorsHandlers } = require("../handlers/colorsHandlers");

const colorsRouter = Router();

//RUTA PARA CARGAR LOS COLORES
colorsRouter.get("/", getColorsHandlers);

module.exports = colorsRouter;
