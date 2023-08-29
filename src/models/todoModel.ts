import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema({
  title: {
    required: "kindly enter the title",
    type: String,
  },
  description: {
    type: String,
    length: 150,
  },
  deadline: {
    type: Date,
  },
  user: { type: String, ref: "User" },
});

module.exports = mongoose.model("Todo", TodoSchema);
