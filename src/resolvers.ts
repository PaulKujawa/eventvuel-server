import { IResolvers } from "graphql-tools";
import TicketmasterApi, { EventsPage } from "./data-source/ticketmaster";

const resolvers: IResolvers = {
  Query: {
    eventsPage: async (_src: any, { page, city }: any, { dataSources }: any): Promise<EventsPage> => {
      return await (dataSources.ticketmasterApi as TicketmasterApi).getEventsPage(page, city) || {
          events: [],
          hasMore: false,
      };
    },
  },
  Event: {
    images: (event: any) => event.images.filter((image: any) => image.ratio === '16_9'),
  },
};

export default resolvers;
