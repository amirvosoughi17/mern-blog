import { Schema, model } from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'

const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    default: "user"
  },
  avatar: {
    type: String,
    default: ""
  }
},
  { timestamps: true }
);
// Encrypt password
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  return this.password = await bcrypt.hash(this.password, 10);
});

//  Generate JWT Token
userSchema.methods.getJWTToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE
  })
}

//  Compare password
userSchema.methods.comparePasword = function (enteredPassword) {
  return bcrypt.compare(enteredPassword, this.password);
}
const User = model("User", userSchema);
export default User;