import { ApolloServer } from "apollo-server-lambda";
import TicketmasterApi from "./data-source/ticketmaster";
import typeDefs from "./schema/index";
import resolvers from "./resolver/index";

export interface ResolverContext {
  dataSources: {
    ticketmasterApi: TicketmasterApi;
  };
}

const server = new ApolloServer({
  typeDefs,
  resolvers: resolvers as any,
  formatError: (error: string) => console.log(error),
  dataSources: () => ({
    ticketmasterApi: new TicketmasterApi()
  }),
  context: {
    token: process.env.TICKETMASTER_API
  },

  // www.apollographql.com/docs/apollo-server/features/graphql-playground.html
  playground: true,
  introspection: true
});

exports.handler = server.createHandler();

// server.listen({ port: 4000 }).then(({ url }: ServerInfo) => {
//   console.log(`🚀 Server ready at ${process.env.NOW_URL || url}`);
// });
