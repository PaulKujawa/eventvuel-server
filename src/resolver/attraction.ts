import { IResolvers } from "graphql-tools";
import { ResolverContext } from "../main";

const resolvers: IResolvers<any, ResolverContext> = {
  AttractionDetail: {
    eventCount: attraction => attraction.event_count
  },
  AttractionInterface: {
    __resolveType: (source: any) =>
      source.state ? "AttractionDetail" : "Attraction"
  }
};

export default resolvers;
