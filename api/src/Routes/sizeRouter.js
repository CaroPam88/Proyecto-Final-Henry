const { Router } = require("express");
const { getSizeHandler } = require("RUTAS EN CREACION");

const sizeRouter = Router();

//RUTA PARA CARGAR LAS TALLAS
sizeRouter.get("/", getSizeHandler);

module.exports = sizeRouter;
