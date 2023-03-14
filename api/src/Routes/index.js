const { Router } = require("express");
// Importar todos los routers;
const clothesRouter = require("./clothesRouter");
const sizeRouter = require("./sizeRouter");

const router = Router();

//enviamos a la request por diferentes rutas para modularizar

router.use("/clothes", clothesRouter);
router.use("/colors", colorsRouter)
router.use("/size", sizeRouter);

module.exports = router;
