import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';

export const isAuthUser = async (req, res, next) => {
  try {
    const { token } = req.cookies;
    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Please Login to access this resource"
      })
    }
    const decodedData = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decodedData.id);
    return next()
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    })
  }
}