import { gql } from 'apollo-server';

export default gql`
  type Classification {
    family: Boolean!
    "Rock, Football, etc"
    genre: ClassificationType!
    primary: Boolean!
    "Music, Sports, Arts"
    segment: ClassificationType!
    "Indie Rock, NFL, etc"
    subGenre: ClassificationType!
    "Band, Choir, Chorus, etc"
    subType: ClassificationType!
    "Donation, Group, Individual, Merchandise, Event Style, etc"
    type: ClassificationType!
  }

  type ClassificationType {
    id: ID!
    name: String!
  }
`
