import { IResolvers } from "graphql-tools";
import { ResolverContext } from "@/main";

const resolvers: IResolvers<any, ResolverContext> = {
  Event: {
    attractions: event => event.attractions || [],
    categories: event => event.categories || [],
    dayOfWeek: event => event.day_of_week,
    doorOpeningDate: event => event.door_opening_date,
    externalUrl: event => event.external_url,
    eventDate: event => event.event_date,
    localEventDate: event => event.local_event_date,
    onSaleDate: event => event.on_sale_date,
    offSaleDate: event => event.off_sale_date,
    priceRanges: event => event.price_ranges
  },
  Query: {
    eventList: (_src, { cityIds, start, sort }, { dataSources }) =>
      dataSources.ticketmasterApi.getEventList(cityIds, start, sort)
  },
  PriceRanges: {
    excludingTicketFees: priceRanges => priceRanges.excluding_ticket_fees,
    includingTicketFees: priceRanges => priceRanges.including_ticket_fees
  }
};

export default resolvers;
