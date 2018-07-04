const Joi = require('joi');
const expressJoi = require('express-joi-validator');

// controllers
const AuthCtrl = require('../controllers/auth.controller');

// utils
const apiResponse = require('../utils/apiResponse');

// schemas
const authSchema = require('../schemas/auth.schema');

// middlewares
const { verifyToken } = require('../middlewares/tokenValidator');


module.exports = (app) => {
  app.post('/api/auth/signup', AuthCtrl.createUser);
  app.post('/api/auth/signin', AuthCtrl.signIn);

  // handle all methods
  app.all('*', (req, res) => apiResponse(res, 'error', 'Method not allowed', 405));
};
