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

  public async getEventsPage(start: number = 0): Promise<any> {
    const res = await this.get(`events`, {
      domain: "germany",
      start
      // sort: "date,asc"
    });

    const { rows, total } = res.pagination;

    return {
      events: res.events,
      hasMore: start + Math.max(rows, this.TmMaxRows) < total
    };
  }
}
