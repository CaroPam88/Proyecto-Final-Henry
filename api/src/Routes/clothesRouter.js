const {Router} = require('express');
const {
	getProductHandler,
	getProductByIdHandler,
	postProductHandler,
	putProductHandler,
	getProductByGenderHandler,
	postMercadoPago,
	UpdateClothes,
	changeExisting,
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
clothesRouter.put('/', putProductHandler);

//RUTA PARA MODIFICAR CUALQUIER PROPIEDAD DE LA PRENDE( SOLO LO PUEDE HACER EL USUARIO ADMIN)
clothesRouter.put('/admin/:idItem', UpdateClothes);

//RUTA PARA MODIFICAR EXISTENCIA

clothesRouter.put('/exist/:idItem', changeExisting);

//RUTAS PARA MERCADO PAGO

//Faltando rutas nuevas segun el avance del proyecto

module.exports = clothesRouter;
