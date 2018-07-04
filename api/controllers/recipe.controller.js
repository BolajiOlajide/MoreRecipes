// models
const models = require('../models');

// utils
const apiResponse = require('../utils/apiResponse');


const { Recipe } = models;

/**
 * controller for handling recipe requests
 *
 * @export
 * @class RecipeCtrl
 */
const RecipeCtrl = {
  /**
   * method for handling recipe creation
   *
   * @static
   * @param {any} req - express request object
   * @param {any} res - res reply method
   * @returns {null} - doesn't return any value
   * @memberOf UserCtrl
   */
  async createRecipe(req, res) {
    try {
      const { id } = req.decoded;
      const recipeObj = {
        ...req.body,
        userId: id
      };
      console.log('');
      console.log(recipeObj);
      console.log('');
      const recipe = await Recipe.create(recipeObj);
      return apiResponse(res, 'success', 'recipe', 201);
    } catch (error) {
      return apiResponse(res, 'error', error.message, 400);
    }
  }
};

module.exports = RecipeCtrl;
