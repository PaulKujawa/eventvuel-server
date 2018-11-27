import { IResolverObject } from "graphql-tools";
import { ResolverContext } from 'src/main';

const Attraction: IResolverObject<undefined, ResolverContext> = {
  upcomingEvents: (attraction: any) => attraction.upcomingEvents.total || 0,
};

const ExternalLink: IResolverObject<undefined, ResolverContext> = {
  url: (externalLink: any) => externalLink[0],
};

const Query: IResolverObject<undefined, ResolverContext> = {
  attractionsPage: async (_src, { page, city }, { dataSources }): Promise<any> => {
    return await dataSources.ticketmasterApi.getAttractionsPage(page, city) || {
      attractions: [],
      hasMore: false,
    };
  },
  attraction: (_src, { id }, { dataSources }): Promise<any> => dataSources.ticketmasterApi.getAttraction(id),
};

export default {
  Attraction,
  ExternalLink,
  Query,
};
