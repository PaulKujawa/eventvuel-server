const resolvers = {
    Query: {
      mostRelevantEvents: async (_src, { city }, { dataSources }) => {
        return await dataSources.ticketmasterApi.getMostRelevantEvents(city) || [];
      },
    },
    Event: {
      images: (event) => event.images.filter((image) => image.ratio === '16_9'),
    },
};

module.exports.resolvers = resolvers;
