import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    required: "kindly enter the name",
    type: String,
  },
  email: {
    required: "kindly enter the email",
    type: String,
  },
  password: {
    required: "kindly enter the password",
    type: String,
  },
});

module.exports = mongoose.model("User", userSchema);
