import { RESTDataSource, RequestOptions } from "apollo-datasource-rest";
import { rootCategories as tmRootCategories } from "@/data-source/TM-config";

type getEventListArgs = {
  categoryIds: string[];
  cityIds: string[];
  sort: string;
  start: number;
};

export default class TicketmasterApi extends RESTDataSource {
  private readonly TmMaxRows = 250;

  constructor() {
    super();
    this.baseURL = "https://app.ticketmaster.eu/mfxapi/v2/";
  }

  public willSendRequest(request: RequestOptions): void {
    request.params.set("apikey", this.context.token);
  }

  public async getEventList({
    categoryIds,
    cityIds,
    sort = "eventdate",
    start = 0
  }: getEventListArgs): Promise<any> {
    const categories = [];
    const subcategories = [];

    for (const categoryId of categoryIds) {
      tmRootCategories.includes(+categoryId)
        ? categories.push(categoryId)
        : subcategories.push(categoryId);
    }

    const res = await this.get(
      `events`,
      Object.assign(
        {
          city_ids: cityIds,
          sort_by: sort,
          start,
          rows: 30
        },
        categories.length ? { category_ids: categories } : null,
        subcategories.length ? { subcategory_ids: subcategories } : null
      )
    );

    const { rows, total } = res.pagination;

    return {
      events: res.events,
      hasMore: start + Math.max(rows, this.TmMaxRows) < total
    };
  }

  public async getSubCategories(categoryId: number): Promise<any[]> {
    const res = await this.get("categories", {
      category_id: categoryId,
      subcategories: true
    });

    if (res.categories.length) {
      return res.categories[0].subcategories;
    }

    return [];
  }
}
