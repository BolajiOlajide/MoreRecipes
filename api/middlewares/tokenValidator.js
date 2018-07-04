const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

// utils
const apiResponse = require('../utils/apiResponse');


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

    jwt.verify(token, SECRET_KEY, (err, decoded) => {
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
