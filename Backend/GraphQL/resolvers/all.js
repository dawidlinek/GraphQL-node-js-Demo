import { UserResolver, UserMutation } from "./UserResolver.js";
import { NoteResolver, NoteMutation } from "./NoteResolver.js";


export let resolvers = {
  Query: {
    users: UserResolver,
    notes: NoteResolver,
    
  },
  Mutation: {
    createUser: UserMutation,
    createNote: NoteMutation,
  },
};
