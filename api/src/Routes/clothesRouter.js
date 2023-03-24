const {Router} = require('express');
const {
	getProductHandler,
	getProductByIdHandler,
	postProductHandler,
	putProductHandler,
	getProductByGenderHandler,
	postMercadoPago,
} = require('../handlers/clothesHandlers');

const clothesRouter = Router();

//RUTA PARA MOSTRAR TODOS LAS PRENDAS SIN DETALLE
clothesRouter.get('/', getProductHandler);

//RUTA QUE MUESTRA FORPA POR GENERO
clothesRouter.get('/gender/:gender', getProductByGenderHandler);

//RUTA PARA MOSTRAR LAS PRENDAS POR ID JUNTO AL DETALLE DE LA MISMA
clothesRouter.get('/:id', getProductByIdHandler);

//RUTA PARA CREAR PRODUCTO O PRENDA NUEVA
clothesRouter.post('/', postProductHandler);

//RUTA PARA ACTUALIZAR LA PRENDA (ESENCIAL PARA EL MANEJO DE STOCK)
clothesRouter.put("/:id", putProductHandler);

//RUTAS PARA MERCADO PAGO



//Faltando rutas nuevas segun el avance del proyecto

module.exports = clothesRouter;

