const jwt = require('jsonwebtoken');

module.exports = function (roles) {
  return function (req, res, next) {
    if (req.method === 'OPTION') {
      next();
    }
    try {
      const token = req.headers.authorization.split(' ')[1]; //"Bearer jwt"
      if (!token) {
        return res.status(401).json({ message: 'not authorised' });
      }
      const { role: userRole } = jwt.verify(token, process.env.SECRET_KEY);
      const hasRole = roles.includes(userRole);
      if (!hasRole) {
        return res.status(401).json({ message: 'permission denied' });
      }
      next();
    } catch (error) {
      res.status(401).json({ message: 'not authorised' });
    }
  };
};
