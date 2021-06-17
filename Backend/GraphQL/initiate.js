import { ApolloServer } from "apollo-server-fastify";

import { typeDefs } from "./typeDefs/all.js";
import { resolvers } from "./resolvers/all.js";
import { makeExecutableSchema } from "graphql-tools";
import responseCachePlugin from "apollo-server-plugin-response-cache";

const GraphQLSchema = makeExecutableSchema({
  typeDefs,
  resolvers,
});
export const GraphQLServer = new ApolloServer({
  schema: GraphQLSchema,
  cacheControl: true,
  plugins: [responseCachePlugin()],
});
