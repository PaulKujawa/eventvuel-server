import { IResolverObject } from "graphql-tools";
import { EventsPage, Query, ResolverContext, Event } from './schema';

const Query: IResolverObject<undefined, ResolverContext> = {
  eventsPage: async (_src, { page, city }, { dataSources }): Promise<EventsPage> => {
    return await dataSources.ticketmasterApi.getEventsPage(page, city) || {
      events: [],
      hasMore: false,
    };
  },
};

const Event: IResolverObject<Event, ResolverContext> = {
  images: (event) => event.images.filter((image) => image.ratio === '16_9'),
}

export default {
  Query,
  Event,
};
