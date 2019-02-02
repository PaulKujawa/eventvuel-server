import gql from "graphql-tag";

export default gql`
  interface AttractionInterface {
    id: ID!
    name: String!
    url: String!
  }

  type Attraction implements AttractionInterface {
    id: ID!
    name: String!
    url: String!
    rank: Int
  }

  type AttractionDetail implements AttractionInterface {
    categories: Category!
    eventCount: Int!
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
