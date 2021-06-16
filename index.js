import { ApolloServer, gql } from "apollo-server";

import { User as UserSchema } from "./typeDefs/user.js";
import { UserResolver } from "./resovers/UserResolver.js";

const typeDefs = [UserSchema];

const resolvers = {
  Query: {
    users: UserResolver,
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log("Serwer działa");
});
