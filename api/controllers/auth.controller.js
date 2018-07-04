const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

// models
const models = require('../models');

// utils
const apiResponse = require('../utils/apiResponse');


dotenv.config();
const { User } = models;
const { SECRET_KEY } = process.env;
const audience = process.env.JWT_AUDIENCE;
const algorithm = process.env.JWT_ALGO
const jwtConfig = {
  expiresIn: '24h',
  algorithm,
  audience,
};

/**
 * controller for handling user requests
 *
 * @export
 * @class UserCtrl
 */
const AuthCtrl = {
  /**
   * method for handling user creation
   *
   * @static
   * @param {any} req - express request object
   * @param {any} res - res reply method
   * @returns {null} - doesn't return any value
   * @memberOf UserCtrl
   */
  async createUser(req, res) {
    try {
      const newUser = await User.create(req.body);
      const { password, updatedAt, createdAt, ...serializedUser } = newUser.dataValues;
      const token = jwt.sign(serializedUser, SECRET_KEY, jwtConfig);
      return apiResponse(res, 'success', token, 201);
    } catch (error) {
      return apiResponse(res, 'error', error.message, 400);
    }
  },

  async signIn(req, res) {
    try {
      const { username, password } = req.body;
      const user = await User.findOne({ where: { username } });
      const serializedUser = {
        id: user.id,
        username: user.username,
        firstname: user.firstname,
        lastname: user.lastname
      };
      const token = jwt.sign(serializedUser, SECRET_KEY, jwtConfig);
      return apiResponse(res, 'success', token, 201);
    } catch (error) {
      return apiResponse(res, 'error', error.message, 400);
    }
  }
};

module.exports = AuthCtrl;
