/**
 * The api response
 *
 * @param {object} res expressjs response object
 * @param {string} status the status
 * @param {string} data the response message
 * @param {number} responseCode the status code of the response
 *
 * @returns {object} the api response
 */
function apiResponse(res, status, data, responseCode) {
  if (status === 'success') {
    return res.status(responseCode).json({ status, data });
  }
  return res.status(responseCode).json({ status, message: data });
};

module.exports = apiResponse;
