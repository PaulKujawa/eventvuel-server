const resolvers = {
    Query: {
      mostRelevantEvents: async (_src, _args, { dataSources }) => {
        return dataSources.ticketmasterApi.getMostRelevantEvents();
      },
    },
    Event: {
      image: (event) => {
        return event.images.find((image) => image.ratio === '16_9' && image.width === 640);
      },
    },
};

module.exports.resolvers = resolvers;
