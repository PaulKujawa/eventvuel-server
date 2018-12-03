import { ApolloServer, ServerInfo } from 'apollo-server';
import TicketmasterApi from './data-source/ticketmaster';
import typeDefs from './schema';
import resolvers from './resolver';

export interface ResolverContext {
  dataSources: {
    ticketmasterApi: TicketmasterApi;
  }
}

const server = new ApolloServer({
    typeDefs,
    resolvers: (resolvers as any),
    formatError: (error: string) => console.log(error),
    dataSources: () => ({
      ticketmasterApi: new TicketmasterApi(),
    }),
    context: {
      token: process.env.TICKETMASTER_API,
    },
});

server.listen({ port: 4000 }).then(({ url }: ServerInfo) => {
  console.log(`🚀 Server ready at ${ process.env.NOW_URL || url }`);
});
