const resolvers = {
  Query: {
    eventsPage: async (_src, { page, city }, { dataSources }) => {
      return await dataSources.ticketmasterApi.getEventsPage(page, city) || {
          events: [],
          hasMore: false,
      }
    },
  },
  Event: {
    images: (event) => event.images.filter((image) => image.ratio === '16_9'),
  },
};

module.exports.resolvers = resolvers;
