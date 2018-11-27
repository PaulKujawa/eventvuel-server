import { IResolverObject } from "graphql-tools";
import { ResolverContext } from 'src/main';

const Query: IResolverObject<undefined, ResolverContext> = {
  venuesPage: async (_src, { page, city }, { dataSources }): Promise<any> => {
    return await dataSources.ticketmasterApi.getVenuesPage(page, city) || {
      venues: [],
      hasMore: false,
    };
  },
  venue: (_src, { id }, { dataSources }): Promise<any> => dataSources.ticketmasterApi.getVenue(id),
};

const Venue: IResolverObject<undefined, ResolverContext> = {
  upcomingEvents: (attraction: any) => attraction.upcomingEvents.total || 0,
};

export default {
  Query,
  Venue,
};
