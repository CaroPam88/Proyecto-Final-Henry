const { DataTypes } = require('sequelize');

//Export the function that defines the model.
module.exports = (sequelize) => {
    //Define model.
    sequelize.define('colors', {
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
    },{
        timestamps: false,
        freezeTableName: true,
    });
}