const jwt = require('jsonwebtoken');
const config = require('config'); // need the secret token

module.exports = function(req, res, next) {
  // Get token from header
  const token = req.header('x-auth-token');

  //Check if not token send denied err
  if (!token) {
    return res.status(401).json({ msg: 'No Token, authorization denied' });
  }
  //Verify valid Token
  try {
    const decoded = jwt.verify(token, config.get('jwtSecret'));
    req.user = decoded.user;
    next();
  } catch (err) {
    // if there is a token but not valid
    return res.status(401).json({ msg: 'Token is not valid' });
  }
};
