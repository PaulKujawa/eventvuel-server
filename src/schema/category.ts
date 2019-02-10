import gql from "graphql-tag";

export default gql`
  extend type Query {
    subCategories(categoryId: ID!): [Category!]!
  }

  type Category {
    id: ID!
    name: String!
    subcategories: [Category!]!
  }
`;
