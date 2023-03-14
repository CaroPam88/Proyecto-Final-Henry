require('dotenv').config()
const axios = require("axios");
const {Clothes, Colors, Size} = require('../db');


async function clothesPost (req, res, next){
const { name, image, sex, type, colorId, sizeId} = req.body
try {
    const clothesCreated = await Clothes.create({
        name,
        image,
        sex,
    });

    const relacionColors = await Colors.findAll({
        where:{
            name: colorId,
        }
    })

    const relacionSize = await Size.findAll({
        where:{
            size:sizeId,
        }
    })

    clothesCreated.addColors(relacionColors);
    clothesCreated.addSize(relacionSize);
    res.send(clothesCreated)
} catch (error) {
    next(error)
   }
}



const ColorsModel = async function(req, res){
    const types = ["blue", "black", "white", "green"]
    types.forEach(type => Colors.findOrCreate({where: {name:type}}))

    const allColors = await Colors.findAll()
    res.send(allColors)
}
const SizeModel = async function(req, res){
    const types = ["S", "M", "L", "XL", "XXL"]
    types.forEach(type => Size.findOrCreate({where: {size:type}}))

    const allSize = await Size.findAll()
    res.send(allSize)
}

module.exports = {
    clothesPost,
    ColorsModel,
    SizeModel,
}