import { Note } from "../../MongoDB/models/NoteModel.js";
import { User } from "../../MongoDB/models/UserModel.js";

let NoteResolver = (a, b, c, info) => {
//   info.cacheControl.setCacheHint({ maxAge: 10 });

  return Note.find().populate("user");
};
let NoteMutation = async (parent, { title, priority, content, user }) => {
  const note = new Note({
    title,
    priority,
    content,
    user,
  });
  await note.save();
  await User.updateOne({ _id: user }, { $push: { notes: note } });
  return note;
};
export { NoteMutation, NoteResolver };
