const Joi = require('joi');


const schema = {
  createUser: {
    body: {
      username: Joi.string().required(),
      password: Joi.string().min(8).required(),
      firstname: Joi.string().required(),
      lastname: Joi.string().required()
    }
  },
  signIn: {
    username: Joi.string().required(),
    password: Joi.string().min(8).required()
  }
};

module.exports = schema;
