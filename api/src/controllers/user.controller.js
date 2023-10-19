import User from "../models/user.model.js";
// Show the user information in profile
export const showInfo = async (req, res) => {
  const userID = req.params.id;
  try {
    const user = await User.findById(userID);
    return res.status(200).json({
      success: true,
      user
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message
    })
  }
}
export const updateInfo = async (req, res) => {
  const userID = req.params.id;
  try {
    const newInfo = await User.findByIdAndUpdate(userID, );

  } catch (error) {
    return req.status(500).json({
      success: false,
      message: error.message
    })
  }
}