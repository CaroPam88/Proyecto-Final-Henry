const {DataTypes} = require('sequelize');

module.exports = (sequelize) => {
	sequelize.define(
		'colors',
		{
			id: {
				type: DataTypes.INTEGER,
				autoIncrement: true,
				primaryKey: true,
				allowNull: false,
			},
			color: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			stockColors: {
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
