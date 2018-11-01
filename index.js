const { ApolloServer } = require('apollo-server');
const { TicketmasterApi } = require('./data-source/ticketmaster');
const { typeDefs } = require('./schema');
const { resolvers } = require('./resolvers');

const server = new ApolloServer({
    typeDefs,
    resolvers,
    formatError: (error) => console.log(error),
    dataSources: () => ({
      ticketmasterApi: new TicketmasterApi(),
    }),
    context: () => ({
      token: process.env.TICKETMASTER_API,
    }),
});

server.listen({ port: 4000 }).then(({ url }) => {
  console.log(`🚀 Server ready at ${ process.env.NOW_URL || url }`);
});
