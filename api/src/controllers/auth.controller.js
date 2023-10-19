import { urlencoded } from "express";
import User from "../models/user.model.js"


export const registerUser = async (req, res) => {
  // give the data from  request
  const { name, email, password } = req.body;
  //  Check if not empty sended request
  if (!name && !email && !password) {
    return res.status(400).json({
      success: false,
      message: "All fields are required, Please fill in all fields"
    });
  }
  // check user existing
  const userExists = await User.findOne({ email });
  if (userExists) {
    return res.status(400).json({
      success: false,
      message: "Email has already registared in website!!"
    });
  }
  // Check the length of password
  if (password.length < 4) {
    return res.status(400).json({
      success: false,
      message: "Password must be more than 4 characters"
    })
  }
  try {
    //  Create new user after validation
    const user = await User.create({
      name,
      email,
      password
    });
    return res.status(201).json({
      success: true,
      message: "Register successfully",
      user
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message
    })
  }
}