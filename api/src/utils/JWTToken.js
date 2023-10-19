import jwt from 'jsonwebtoken';


export const sendToken = (statusCode, user, res) => {
  const token = user.getJWTToken();
  const options = {
    expire: new Date(
      Date.now() + process.env.COOKIE_EXPIRE * 24 * 24 * 60 * 1000
    ),
    httpOnly: true
  };
  return res.status(statusCode).cookie("token", token, options).json({
    success: true,
    user,
    token
  })
}