import attractionSchema from "@/schema/attraction";
import eventSchema from "@/schema/event";
import venueSchema from '@/schema/venue';
import gql from "graphql-tag";

const rootSchema = gql`
  type Query {
    _: Boolean
  }

  type Category {
    id: ID!
    name: String!
    subcategories: [Category!]! # always return an array
  }

  type Date {
    format: String! # "datetime"
    value: String! # "2018-11-15T20:00:00Z"
  }

  type Images {
    large: Image!
    standard: Image!
  }

  // ratio 3:4
  type Image {
    height: Int!
    url: String!
    width: Int!
  }
`;

export default [
  attractionSchema,
  eventSchema,
  rootSchema
    venueSchema,
];
