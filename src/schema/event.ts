import gql from "graphql-tag";

export default gql`
  extend type Query {
    eventsPage(page: Int!, city: String!, classification: ID): EventsPage!
    event(id: ID!): Event
  }

  type Event {
    id: ID!
    attractions: [Attraction!]! # always return an array
    currency: String! # "EUR"
    categories: [Category!]! # always return an array
    dayOfWeek: String # day_of_week
    domain: String!
    doorOpeningDate: Date; # door_opening_date
    externalUurl: boolean! # TODO external_url
    eventDate: Date # event_date
    images: Images!
    localEventDate: Date # local_event_date
    name: String!
    onSaleDate: Date! # on_sale_date
    offSaleDate: Date! # off_sale_date
    priceRanges: PriceRanges! # price_ranges
    properties: Properties!
    url: String!
    timezone: String # "Europe/Berlin"
    venue: Venue!
  }

  type EventsPage {
    events: [Event!]!
    hasMore: Boolean!
  }

  type PriceRanges {
    excludingTicketFees: TicketFee! # excluding_ticket_fees
    includingTicketFees: TicketFee! # including_ticket_fees
  }

  type Properties {
    cancelled: Boolean!
    package: Boolean!
    rescheduled: Boolean!
    seats_available: Boolean!
    sold_out: Boolean!
  }

  type TicketFee {
    min: Int!
    max: Int!
  }
`;
