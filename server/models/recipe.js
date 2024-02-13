'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Recipe extends Model {
    static associate(models) {
      Recipe.belongsTo(models.User, { foreignKey: 'userId' });
      Recipe.belongsTo(models.Category, { foreignKey: 'categoryId' });
    }
  };
  Recipe.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: "title is required"
        },
        notEmpty: {
          args: true,
          msg: "title is required"
        }
      }
    },
    imageUrl: DataTypes.STRING,
    userId: {
      type: DataTypes.INTEGER,
      allowNull:false,
      validate:{
        notNull :{
          args: true,
          msg: "User Id is required"
        },
        notEmpty:{
          args: true,
          msg: "User Id is required"
        }
      }
    },
    categoryId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Recipe',
  });
  return Recipe;
};
