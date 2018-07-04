const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

// utils
const apiResponse = require('../utils/apiResponse');
const jwtConfig = require('../utils/jwtConfig');


dotenv.config();
const { SECRET_KEY } = process.env;

const Auth = {
  verifyToken(request, response, next) {
    const token = request.headers.authorization ||
      request.body.token || request.headers['x-access-token'];

    if (!token) {
      return response.status(401)
      .send({ message: 'No token supplied' });
    }

    return jwt.verify(token, SECRET_KEY, jwtConfig, (err, decoded) => {
      if (err) {
        return response.status(401)
            .send({ message: 'Token Invalid' });
      }
      request.decoded = decoded;
      return next();
    });
  },
};

module.exports = Auth;
