import { IResolvers } from 'graphql-tools';
import { ResolverContext } from '@/main';

const resolvers: IResolvers<any, ResolverContext> = {
  Attraction: {
    upcomingEvents: (attraction) => attraction.upcomingEvents.total || 0,
  },
  ExternalLink: {
    url: (externalLink) => externalLink[0],
  },
  Query: {
    attraction: (_src, { id }, { dataSources }) => dataSources.ticketmasterApi.getAttraction(id),
    attractionsPage: async (_src, { page, city }, { dataSources }) => {
      return await dataSources.ticketmasterApi.getAttractionsPage(page, city) || {
        attractions: [],
        hasMore: false,
      };
    },
  },
};

export default resolvers;
