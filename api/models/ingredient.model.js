'use strict';


module.exports = (sequelize, DataTypes) => {
  const Ingredient = sequelize.define('Ingredient', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    timestamp: true,
    classMethods: {
      associate: function(models) {
        const { Recipe } = models;

        Ingredient.belongsToMany(Recipe, {
          through: 'RecipeIngredients',
          foreignKey: 'ingredientId'
        });
      }
    }
  });

  return Ingredient;
};
