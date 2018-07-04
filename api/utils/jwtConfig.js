const dotenv = require('dotenv');


dotenv.config();

const audience = process.env.JWT_AUDIENCE;
const algorithm = process.env.JWT_ALGO
const jwtConfig = {
  expiresIn: '24h',
  algorithm,
  audience,
};

module.exports = jwtConfig;
