import gql from "graphql-tag";

export default gql`
  extend type Query {
    eventList(
      categoryIds: [ID!]!
      cityIds: [ID!]!
      sort: String
      start: Int
    ): EventList!
  }

  type Event {
    id: ID!
    attractions: [Attraction!]!
    currency: String!
    categories: [Category!]!
    dayOfWeek: String
    domain: String!
    doorOpeningDate: Date # seems like always null
    externalUrl: Boolean!
    eventDate: Date
    images: Images
    localEventDate: Date
    name: String!
    onSaleDate: Date!
    offSaleDate: Date!
    priceRanges: PriceRanges
    properties: Properties!
    url: String!
    timezone: String
    venue: Venue!
  }

  type EventList {
    events: [Event!]!
    hasMore: Boolean!
  }

  type PriceRanges {
    excludingTicketFees: TicketFee!
    includingTicketFees: TicketFee!
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
