const {Router} = require('express');
// Importar todos los routers;
const clothesRouter = require('./clothesRouter');
const sizeRouter = require('./sizeRouter');
const colorsRouter = require('./colorsRouter');
const userRouter = require('./userRouter');
const {ratingUser} = require('../handlers/clothesHandlers')
const { postMercadoPago } = require('../handlers/clothesHandlers');

const router = Router();

//enviamos a la request por diferentes rutas para modularizar

router.use('/clothes', clothesRouter);
router.use('/size', sizeRouter);
router.use('/colors', colorsRouter);
router.use('/user', userRouter);
router.post("/pay", postMercadoPago );
router.post("/clothes/rating/:num", ratingUser)
module.exports = router;
