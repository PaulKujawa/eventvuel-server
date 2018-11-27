import { IResolverObject } from "graphql-tools";
import { ResolverContext } from 'src/main';

// const Query: IResolverObject<undefined, ResolverContext> = {
//   eventsPage: async (_src, { page, city }, { dataSources }): Promise<EventsPage> => {
//     return await dataSources.ticketmasterApi.getEventsPage(page, city) || {
//       events: [],
//       hasMore: false,
//     };
//   },
// };

// const Event: IResolverObject<Event, ResolverContext> = {
//   images: (event) => event.images.filter((image) => image.ratio === '16_9'),
// }

const Dates: IResolverObject<any, ResolverContext> = {
  status: (dates) => dates.status.code,
}

const Event: IResolverObject<any, ResolverContext> = {
  attractions: (event) => event._embedded.attractions,
  images: (event) => event.images.filter((image: any) => image.ratio === '16_9'),
  seatmap: (event) => event.seatmap && event.seatmap.staticUrl,
  venues: (event) => event._embedded.venues,
}

const Query: IResolverObject<undefined, ResolverContext> = {
  eventsPage: async (_src, { page, city }, { dataSources }): Promise<any> => {
    return await dataSources.ticketmasterApi.getEventsPage(page, city) || {
      events: [],
      hasMore: false,
    };
  },
  event: (_src, { id }, { dataSources }): Promise<any> => dataSources.ticketmasterApi.getEvent(id),
};

const Sales: IResolverObject<any, ResolverContext> = {
  presales: (sales) => sales.presales || [],
}

export default {
  Dates,
  Event,
  Query,
  Sales,
};
