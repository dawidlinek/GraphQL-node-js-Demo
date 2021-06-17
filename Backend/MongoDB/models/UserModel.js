import mongoose from "mongoose";
export const User = mongoose.model("User", {
  name: String,
  email: { type: String, unique: true },
  created_at: { type: Date, default: Date.now },
  admin: { type: String, default: false },
  notes: [{ type: mongoose.Schema.Types.ObjectId, ref: "Note" }],
});
