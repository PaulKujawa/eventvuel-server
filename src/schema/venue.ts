import gql from "graphql-tag";

export default gql`
  extend type Query {
    venuesPage(page: Int!, city: String!): VenuesPage!
    venue(id: ID!): VenueDetail
  }

  type Location {
    address: LocationAddress!
  }

  type LocationAddress {
    postalCode: String! # postal_code
    city: String!
    country: String!
    long: Float!
    lat: Float!
  }

  interface VenueInterface {
    id: ID!
    name: String!
    location: Location!
    url: String!
  }

  type Venue implements VenueInterface {
    id: ID!
    name: String!
    location: Location!
    url: String!
  }

  type VenueDetail implements VenueInterface {
    id: ID!
    code: String!
    domain: String!
    location: Location!
    name: String
    url: String!
  }

  type VenuesPage {
    venues: [VenueDetail!]!
    hasMore: Boolean!
  }
`;
