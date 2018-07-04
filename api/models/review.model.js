'use strict';


module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    comment: {
      type: DataTypes.STRING,
      allowNull: false
    },
    score: {
      type: DataTypes.FLOAT,
      allowNull: false
    }
  }, {
    timestamp: true,
    classMethods: {
      associate: function(models) {
        const { Recipe } = models;

        Review.belongsTo(Recipe, {
          foreignKey: recipeId
        });
      }
    }
  });

  return Review;
};
