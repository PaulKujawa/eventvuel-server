import gql from "graphql-tag";

export default gql`
  extend type Query {
    attractionsPage(page: Int!, city: String!): AttractionsPage!
    attraction(id: ID!): Attraction
  }

  interface AttractionInterface {
    id: ID!
    name: String!
    url: String!
    rank: Int
  }

  type Attraction implements AttractionInterface {
    id: ID!
    name: String!
    url: String!
    rank: Int
  }

  type AttractionDetail implements AttractionInterface {
    categories: Category!
    eventCount: Number! # event_count
    id: ID!
    images: Images
    name: String!
    url: String!
  }

  type AttractionsPage {
    attractions: [Attraction!]!
    hasMore: Boolean!
  }
`;
