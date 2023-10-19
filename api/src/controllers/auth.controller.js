import User from "../models/user.model.js"
import { sendToken } from "../utils/JWTToken.js";
import { sendEmail } from "../utils/sendEmail.js";

export const registerUser = async (req, res) => {
  // give the data from  request
  const { name, email, password } = req.body;
  //  Check if not empty sended request
  if (!name || !email || !password) {
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

    sendEmail({
      email: user.email,
      subject: "Welcome...",
      message: `Hello dear ${user.name}, Welcome to Mern blog website`
    })
    sendToken(201, user, res);

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message
    })
  }
}
export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  //  Check if not empty sended request
  if (!email || !password) {
    return res.status(400).json({
      success: false,
      message: "All fields are required, Please fill in all fields"
    });
  }
  try {
    //  Check user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "User not registered in website, Please create an account"
      })
    }
    // Check password is match
    const isPasswordMatch = await user.comparePasword(password);
    if (!isPasswordMatch) {
      return res.status(400).json({
        success: false,
        message: "Password does not match"
      });
    }

    sendToken(200, user, res)

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message
    })
  }
}

export const logout = async (req, res) => {
  try {
    res.cookie("token", null, {
      expire: new Date(Date.now()),
      httpOnly: true,
    });
    return res.status(200).json({
      success: true,
      message: "Logged Out"
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message
    })
  }
}