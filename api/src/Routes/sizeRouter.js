const { Router } = require("express");
const { getSizeHandler } = require("../handlers/sizeHandlers");

const sizeRouter = Router();

//RUTA PARA CARGAR LAS TALLAS
sizeRouter.get("/", getSizeHandler);

module.exports = sizeRouter;
