const { DataTypes } = require("sequelize");

//Export the function that defines the model.
module.exports = (sequelize) => {
  //Define model.
  sequelize.define(
    "rating",
    {
        ratin: {
            type: DataTypes.ARRAY(DataTypes.INTEGER),
            allowNull: true,
            defaultValue: [],
        },
        id:{
            type: DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement: true,
            allowNull: true,
            
        },
        
    },
    {
      timestamps: false,
      freezeTableName: true,
    }
  );
};
