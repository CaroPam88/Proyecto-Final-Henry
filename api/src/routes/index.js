const { Router } = require('express');
const { clothesPost, ColorsModel, SizeModel } = require('../controllers/postControllers')
const router = Router();


router.post("/clothes", clothesPost);
router.get("/colors", ColorsModel)
router.get("/size", SizeModel)




module.exports = router;