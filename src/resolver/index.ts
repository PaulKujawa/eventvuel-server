import { ResolverContext } from "@/main";
import attractionResolvers from "@/resolver/attraction";
import eventResolvers from "@/resolver/event";
import venueResolvers from "@/resolver/venue";
import { IResolvers } from "graphql-tools";

const IndexResolvers: IResolvers<any, ResolverContext> = {
  Category: {
    subcategories: category => category.subcategories || []
  }
};

export default [
  attractionResolvers,
  eventResolvers,
  IndexResolvers,
  venueResolvers
];
