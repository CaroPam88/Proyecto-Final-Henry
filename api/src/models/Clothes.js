const {DataTypes} = require('sequelize');

//Export the function that defines the model.
module.exports = (sequelize) => {
	//Define model.
	sequelize.define(
		'clothes',
		{
			id: {
				type: DataTypes.INTEGER,
				autoIncrement: true,
				primaryKey: true,
				allowNull: false,
			},
			name: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			price: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			type: {
				type: DataTypes.ENUM(
					'vestido',
					'remera',
					'chomba',
					'pantalon',
					'short'
				),
				allowNull: false,
			},
			image: {
				type: DataTypes.TEXT,
				allowNull: false,
			},
			sex: {
				type: DataTypes.ARRAY(DataTypes.STRING),
				allowNull: false,
			},
			stockGeneral: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
			existing: {
				type: DataTypes.BOOLEAN,
				allowNull: false,
			},
			rating: {
				type: DataTypes.ARRAY(DataTypes.JSON),
				allowNull: true,
			},
			review: {
				type: DataTypes.ARRAY(DataTypes.JSON),
				allowNull: true,
			},
		},

		{
			timestamps: false,
			freezeTableName: true,
		}
	);
};
