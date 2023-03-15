const {Clothes, Size} = require('../db');

let getIdData = async (req, res) => {
    let {id} = req.params

	const clothes = await Clothes.findAll({
		include: {
			model: Size,
			attributes: ['size', 'colors', 'stock'],
			through: {
				attributes: [],
			},
		},
	});

    try {
        if(id){
            const dataId = clothes.filter((e) => e.id.toString() === id)
            res.send(dataId)
        }else{
            res.send(clothes)
        }
    } catch (error) {
        res.send(error)
    }
};

module.exports = getIdData;