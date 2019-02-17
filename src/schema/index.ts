import attractionSchema from "./attraction";
import categorySchema from "./category";
import eventSchema from "./event";
import venueSchema from "./venue";
import gql from "graphql-tag";

const rootSchema = gql`
  type Query {
    _: Boolean
  }

  type Date {
    format: String! # "datetime"
    value: String! # "2018-11-15T20:00:00Z"
  }

  type Images {
    large: Image!
    standard: Image!
  }

  # ratio 3:4
  type Image {
    height: Int!
    url: String!
    width: Int!
  }
`;

export default [
  attractionSchema,
  categorySchema,
  eventSchema,
  rootSchema,
  venueSchema
];
