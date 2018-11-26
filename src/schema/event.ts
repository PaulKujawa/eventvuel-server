import { gql } from 'apollo-server';

export default gql`
  extend type Query {
    eventsPage(page: Int!, city: String!): EventsPage!
    event(id: ID!): Event
  }

  type EventsPage {
    events: [Event!]!
    hasMore: Boolean!
  }

  type Event {
    id: ID!
    attractions: [Attraction!]!
    classifications: [Classification!]!
    dates: Dates!
    images: [Image!]!
    name: String!
    sales: Sales!
    seatmap: String
    url: String!
    venues: [Venue!]!
  }

  type Dates {
    start: Start!
    timezone: String!
    spanMultipleDays: Boolean!
    status: EVENT_DATES_STATUS_CODE!
  }
  
  type PreSales {
    description: String
    endDateTime: String!
    name: String!
    startDateTime: String!
  }

  type Public {
    startDateTime: String!
    startTBD: Boolean!
    endDateTime: String!
  }

  type Sales {
    public: Public!
    presales: [PreSales!]!
  }
  
  type Start {
    dateTBA: Boolean!
    dateTBD: Boolean!
    dateTime: String
    localDate: String!
    localTime: String
    noSpecificTime: Boolean!
    timeTBA: Boolean!
  }

  enum EVENT_DATES_STATUS_CODE {
    onsale
    offsale
  }
`
