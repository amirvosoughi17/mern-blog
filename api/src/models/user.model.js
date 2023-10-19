import { Schema, model } from 'mongoose';
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
const User = model("User", userSchema);
export default User;