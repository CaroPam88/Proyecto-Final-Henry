const { DataTypes } = require('sequelize');

//Export the function that defines the model.
module.exports = (sequelize) => {
    //Define model.
    sequelize.define('Clothes', {
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
        type: {
            type: DataTypes.ENUM('vestido', 'remera', 'chomba', 'pantalon', 'short'),
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
    },{
        timestamps: false,
        freezeTableName: true,
    });
}