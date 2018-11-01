const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    mostRelevantEvents: [Event]!
  }

  type Event {
    id: ID!
    name: String!
    dates: Dates!
    """
    Actually an array of images:
    | Ratio | Width | Height | Purpose |
    | ----- | ----- | ------ | ------- |
    |16_9| 2048| 1152| tablet LC Large |
    |16_9| 1136|  639| retina landscape|
    |16_9| 1024|  576| tablet landscape|
    |16_9|  640|  360| retina portait  |
    |16_9|  205|  115| event detail    |
    |16_9|  100|   56| recomendation   |
    | 3_2|  640|  427| retina portait  |
    | 3_2|  305|  203| artist page     |
    | 3_2| 1024|  638| tablet landscape|
    | 4_3|  305|  225| custom          |
    """
    image: Image!
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
