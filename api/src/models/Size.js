const { DataTypes } = require("sequelize");

//Export the function that defines the model.
module.exports = (sequelize) => {
  //Define model.
  sequelize.define(
    "size",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      size: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      stockSize: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      colors: {
        type: DataTypes.ARRAY(DataTypes.JSON),
        allowNull: false,
      },
    },
    {
      timestamps: false,
      freezeTableName: true,
    }
  );
};
