import { IResolvers } from "graphql-tools";
import { ResolverContext } from "../main";

const resolvers: IResolvers<any, ResolverContext> = {
  LocationAddress: {
    postalCode: address => address.postal_code
  },
  VenueInterface: {
    __resolveType: (source: any) => (source.state ? "VenueDetail" : "Venue")
  }
};

export default resolvers;
