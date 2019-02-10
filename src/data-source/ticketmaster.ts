import { RESTDataSource, RequestOptions } from "apollo-datasource-rest";

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
    start = 0,
    sort = "eventdate"
  }: any): Promise<any> {
    const res = await this.get(`events`, {
      category_ids: categoryIds, // TODO discern between cats and subCats
      city_ids: cityIds,
      sort_by: sort,
      start,
      rows: 30
    });

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
