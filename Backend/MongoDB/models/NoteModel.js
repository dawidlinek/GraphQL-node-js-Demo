import mongoose from "mongoose";
export const Note = mongoose.model("Note", {
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  title: String,
  priority: String,
  content: String,
});
