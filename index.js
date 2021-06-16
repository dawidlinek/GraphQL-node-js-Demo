import { ApolloServer, gql } from "apollo-server";
// import { ApolloServer, gql } from "apollo-server-fastify";

import { User as UserSchema } from "./typeDefs/user.js";
import { UserResolver } from "./resovers/UserResolver.js";

import fastify from "fastify";
const typeDefs = [UserSchema];

const resolvers = {
  Query: {
    users: UserResolver,
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

// For apollo-server
server.listen().then(({ url }) => {
  console.log("Serwer działa");
});

// For apollo-server-fastify
// let app = fastify();

// If we want to add additional routes
// app.get("/", function (request, reply) {
//   reply.send({ hello: "world" });
// });

// (async function () {
//   await server.start();
//   app.register(server.createHandler());
//   await app.listen(3000);
// })();
