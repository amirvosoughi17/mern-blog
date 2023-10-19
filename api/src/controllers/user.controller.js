import User from "../models/user.model.js";
// Show the user information in profile
export const showInfo = async (req, res) => {
  const userID = req.params.id;
  if (!userID) {
    return res.status(404).json({
      success: false,
      message: "User not found with this id : ".userID
    })
  }
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
// Update user information (update profile)
export const updateInfo = async (req, res) => {
  const userID = req.params.id;
  const { name, email } = req.body;
  try {
    const user = await User.findByIdAndUpdate(userID, {
      name,
      email
    }, {
      new: true,
      runValidators: true,
      useFindAndModify: false
    });
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