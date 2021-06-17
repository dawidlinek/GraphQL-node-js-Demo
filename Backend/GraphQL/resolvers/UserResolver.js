import { User } from "../../MongoDB/models/UserModel.js";

let UserResolver = (a, b, c, info) => {
  // info.cacheControl.setCacheHint({ maxAge: 10 });
  return User.find().populate("notes");
};
let UserMutation = async (parent, args) => {
  const user = new User({ name: args.name, email: args.email });
  await user.save();
  return user;
};
export { UserMutation, UserResolver };
