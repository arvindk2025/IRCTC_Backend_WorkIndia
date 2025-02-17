
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();



const authMiddleware = (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) {
    return res.status(401).json({ message: 'No token, Authorization denied' });
  }
  try {
    const cleanedToken = token && token.startsWith('Bearer ')
    ? token.slice(7).trim() 
    : token;
    const decoded = jwt.verify(cleanedToken, process.env.JWT_SECRET);
    req.user = decoded;   // decoded = id, role   means adding id and role into req of user 
    next();
  } catch (err) {
    res.status(401).json({ message: 'Invalid token' });
  }
};

module.exports = authMiddleware;
