const {DataTypes} = require('sequelize');

module.exports = (sequelize) => {
	sequelize.define(
		'Colors',
		{
			id: {
				type: DataTypes.INTEGER,
				autoIncrement: true,
				primaryKey: true,
				allowNull: false,
			},
			color: {
				type: DataTypes.INTEGER,
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
