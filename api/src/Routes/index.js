const { Router } = require("express");
// Importar todos los routers;
const clothesRouter = require("./clothesRouter");
const sizeRouter = require("./sizeRouter");
const colorsRouter = require("./colorsRouter")



const router = Router();

//enviamos a la request por diferentes rutas para modularizar

router.use("/clothes", clothesRouter);
router.use("/size", sizeRouter);
router.use("/colors", colorsRouter)

module.exports = router;
