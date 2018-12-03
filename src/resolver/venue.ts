import { IResolvers } from 'graphql-tools';
import { ResolverContext } from '../main';

const resolvers: IResolvers<any, ResolverContext> = {
  Query: {
    venue: (_src, { id }, { dataSources }) => dataSources.ticketmasterApi.getVenue(id),
    venuesPage: async (_src, { page, city }, { dataSources }) => {
      return await dataSources.ticketmasterApi.getVenuesPage(page, city) || {
        venues: [],
        hasMore: false,
      };
    },
  },
  Venue: {
    upcomingEvents: (attraction) => attraction.upcomingEvents.total || 0,
  },
};

export default resolvers;
