import attractionSchema from "@/schema/attraction";
import categorySchema from "@/schema/category";
import eventSchema from "@/schema/event";
import venueSchema from "@/schema/venue";
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
