'use strict';


module.exports = (sequelize, DataTypes) => {
  const Recipe = sequelize.define('Recipe', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    procedure: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    timestamp: true,
    classMethods: {
      associate: function(models) {
        const { User, Ingredient } = models;

        Recipe.belongsTo(User, {
          foreignKey: 'userId'
        });

        Recipe.belongsToMany(Ingredient, {
          through: 'RecipeIngredients',
          foreignKey: 'recipeId'
        });
      }
    }
  });

  return Recipe;
};
