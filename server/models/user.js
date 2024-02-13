'use strict';
const bcrypt = require('bcrypt')
const {
  Model
} = require('sequelize');
// const { options } = require('../routes');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasMany(models.Recipe, { foreignKey: "recipeId" })
    }
  }
  User.init({
    username: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "Email is Required"
        },
        notNull: {
          args: true,
          msg: "Email is Required"
        },
        isEmail: {
          args: true,
          msg: "Email is Required"
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "Password is Required"
        },
        notNull: {
          args: true,
          msg: "Password is Required"
        },
        min: {
          args: [5],
          msg : "Min. 5 Characters"
          }
      }
    },
    role: {
      type: DataTypes.STRING,
      defaultValue: 'User',
    },
  }, {
    sequelize,
    modelName: 'User',
    hooks:{
      beforeCreate(user, options){
        user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(8))
      }
    }
  })
  return User;
};