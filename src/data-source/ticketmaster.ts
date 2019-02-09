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

  public async getEventList(
    cityIds: number[],
    start: number = 0
  ): Promise<any> {
    const res = await this.get(`events`, {
      // domain: "germany", TODO needs to be a string and is not String(city.country)
      rows: 30,
      city_ids: cityIds,
      sort_by: "popularity", // TODO get from query
      start
    });

    const { rows, total } = res.pagination;

    return {
      events: res.events,
      hasMore: start + Math.max(rows, this.TmMaxRows) < total
    };
  }
}
