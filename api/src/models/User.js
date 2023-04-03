const {DataTypes} = require('sequelize');

module.exports = (sequelize) => {
	sequelize.define(
		'user',
		{
			id: {
				type: DataTypes.UUID,
				defaultValue: DataTypes.UUIDV4,
				primaryKey: true,
				allowNull: false,
			},
			name: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			nickname: {
				type: DataTypes.STRING,
				allowNull: true,
			},
			email: {
				type: DataTypes.STRING,
				allowNull: true,
				unique: true,
			},
			picture: {
				type: DataTypes.STRING,
				allowNull: true,
			},
			admin: {
				type: DataTypes.BOOLEAN,
				allowNull: false,
				defaultValue: false,
			},
			cart: {
				type: DataTypes.ARRAY(DataTypes.JSON),
				allowNull: false,
				defaultValue: [],
			},
			buy: {
				type: DataTypes.ARRAY(DataTypes.JSON),
				allowNull: false,
				defaultValue: [],
			},
			history: {
				type: DataTypes.ARRAY(DataTypes.JSON),
				allowNull: false,
				defaultValue: [],
			},
			locked: {
				type: DataTypes.BOOLEAN,
				allowNull: false,
				defaultValue: false,
			},
		},
		{
			timestamps: false,
			freezeTableName: true,
		}
	);
};
