require("dotenv").config();
const jwt = require("jsonwebtoken");

const checkToken = async (req, res, next) => {
  try {
    const token = req.headers?.authorization;

    if (!token) {
      return res.status(403).json({ message: "No token provided." });
    }

    await jwt.verify(token, process.env.JWT_SECRET);

    next();
  } catch (error) {
    console.log("JWT verification failed: ", error.message);
    res.status(401).json({ message: "Authorization failed!" });
  }
};

module.exports = checkToken;
