const { Router } = require("express");
const { getColorsHandler } = require("RUTAS EN CREACION");

const colorsRouter = Router();

//RUTA PARA CARGAR LOS COLORES
colorsRouter.get("/", getColorsHandler);

module.exports = colorsRouter;
