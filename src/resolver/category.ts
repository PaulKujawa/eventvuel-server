import { IResolvers } from "graphql-tools";
import { ResolverContext } from "../main";

const resolvers: IResolvers<any, ResolverContext> = {
  Category: {
    subcategories: category => category.subcategories || []
  },
  Query: {
    subCategories: (_src, { categoryId }, { dataSources }) =>
      dataSources.ticketmasterApi.getSubCategories(categoryId)
  }
};

export default resolvers;
