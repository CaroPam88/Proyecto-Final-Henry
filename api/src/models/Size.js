const {DataTypes} = require('sequelize');

//Export the function that defines the model.
module.exports = (sequelize) => {
	//Define model.
	sequelize.define(
		'Size',
		{
			id: {
				type: DataTypes.INTEGER,
				autoIncrement: true,
				primaryKey: true,
				allowNull: false,
			},
			size: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
			colors: {
				type: DataTypes.ARRAY(DataTypes.STRING),
				allowNull: false,
			},
			stock: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
		},
		{
			timestamps: false,
			freezeTableName: true,
		}
	);
};
