import { IResolvers } from 'graphql-tools';
import { ResolverContext } from '@/main';

const resolvers: IResolvers<any, ResolverContext> = {
  Dates: {
    status: (dates) => dates.status.code,
  },
  Event: {
    attractions: (event) => event._embedded.attractions,
    images: (event) => event.images.filter((image: any) => image.ratio === '16_9'),
    seatmap: (event) => event.seatmap && event.seatmap.staticUrl,
    venues: (event) => event._embedded.venues,
  },
  Query: {
    event: (_src, { id }, { dataSources }) => dataSources.ticketmasterApi.getEvent(id),
    eventsPage: async (_src, { page, city, classification }, { dataSources }) => {
      return await dataSources.ticketmasterApi.getEventsPage(page, city, classification) || {
        events: [],
        hasMore: false,
      };
    },
  },
  Sales: {
    presales: (sales) => sales.presales || [],
  },
}

export default resolvers;
