import { UserDef } from "./UserDef.js";
import { NoteDef } from "./NoteDef.js";
import { CacheControl } from "./CacheControlDirective.js";
const Querry = `
    type Query {
        users: [User]
        notes: [Note]
    }
    type Mutation {
        createUser(name: String!,email:String!): User!
        createNote(title:String!,priority:String!,content:String!,user:String!): Note!
    }
`;
export let typeDefs = [Querry, CacheControl, UserDef, NoteDef];
