'use strict';

const recipeData = require('../data/recipe');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Recipes', recipeData, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Recipes', null, {});
  }
};
