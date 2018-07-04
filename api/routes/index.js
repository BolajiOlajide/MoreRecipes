const AuthCtrl = require('../controllers/auth.controller');

// utils
const apiResponse = require('../utils/apiResponse');


module.exports = (app) => {
  app.post('/api/users', AuthCtrl.createUser);

  // handle all methods
  app.all('*', (req, res) => apiResponse(res, 'error', 'Method not allowed', 405));
};
