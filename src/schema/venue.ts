import gql from 'graphql-tag';

export default gql`
interface VenueInterface {
  id: ID!
  city: City!
  country: Country
  location: Location!
  postalCode: String!
  timezone: String!
  upcomingEvents: Int!
  url: String!
}

extend type Query {
  venuesPage(page: Int!, city: String!): VenuesPage!
  venue(id: ID!): VenueDetail
}

type VenuesPage {
  venues: [VenueDetail!]!
  hasMore: Boolean!
}

type VenueDetail implements VenueInterface {
  id: ID!
  city: City!
  country: Country
  images: [Image!]!
  location: Location!
  name: String
  postalCode: String!
  social: Social
  state: State!
  timezone: String!
  upcomingEvents: Int!
  url: String!
  # boxOfficeInfo
  # dmas
  # markets
}

type Venue implements VenueInterface {
  id: ID!
  city: City!
  country: Country
  location: Location!
  postalCode: String!
  timezone: String!
  upcomingEvents: Int!
  url: String!
}

type City {
  name: String!
}

type Country {
  countryCode: String!
  name: String!
}

type Location {
  latitude: String!
  longitude: String!
}

type Social {
  twitter: SocialTwitter
}

type SocialTwitter {
  handle: String!
}

type State {
  name: String!
  statusCode: String!
}
`;
