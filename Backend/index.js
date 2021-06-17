
import fastify from "fastify";
import fastifyCaching from "fastify-caching";

import { MongoDBInit } from "./MongoDB/connect.js";
import { GraphQLServer } from "./GraphQL/initiate.js";

// For apollo-server
await MongoDBInit();
const server = GraphQLServer;
// server.listen().then(({ url }) => {
//   console.log("Serwer działa");
// });

// For apollo-server-fastify
const app = fastify();

// If we want to add additional routes
// app.get("/", function (request, reply) {
//   reply.send({ hello: "world" });
// });

(async function () {
  await server.start();
  // app.register(fastifyCaching, { // if we want to use fastify caching. Works only for get requests
  //   expiresIn: 300,
  // });
  app.register(server.createHandler());
  await app.listen(3000);
})();
