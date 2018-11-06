const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    eventsPage(page: Int!, city: String!): EventsPage!
  }

  type EventsPage {
    events: [Event!]!
    hasMore: Boolean!
  }

  type Event {
    id: ID!
    name: String!
    dates: Dates!
    """
    | Width | Height | Purpose |
    | ----- | ------ | ------- |
    | 2048| 1152| tablet LC Large |
    | 1136|  639| retina landscape|
    | 1024|  576| tablet landscape|
    |  640|  360| retina portait  |
    |  100|   56| recomendation   |
    |  205|  115| event detail    |
    """
    images: [Image!]!
  }

  type Image {
    ratio: String!
    url: String!
    width: Int!
    height: Int!
  }

  type Dates {
    start: Date!
    timezone: String!
    spanMultipleDays: Boolean!
  }

  type Date {
    localDate: String!
    localTime: String
  }
`;

module.exports.typeDefs = typeDefs;
