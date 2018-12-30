import attractionSchema from '@/schema/attraction';
import classificationSchema from '@/schema/classification';
import eventSchema from '@/schema/event';
import venueSchema from '@/schema/venue';
import gql from 'graphql-tag';

const rootSchema = gql`
  type Query {
    _: Boolean  
  }

  """
  | Width | Height | Purpose |
  | ----- | ------ | ------- |
  | 2048| 1152| tablet LC Large |
  | 1136|  639| retina landscape|
  | 1024|  576| tablet landscape|
  |  640|  360| retina portait  |
  |  100|   56| recomendation   |
  |  205|  115| event detail    |
  """
  type Image {
    ratio: String!
    url: String!
    width: Int!
    height: Int!
    fallback: Boolean!
  }
`;

export default [
  attractionSchema,
  classificationSchema,
  eventSchema,
  rootSchema,
  venueSchema,
];
