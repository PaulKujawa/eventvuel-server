import { RESTDataSource, RequestOptions } from "apollo-datasource-rest";

export default class TicketmasterApi extends RESTDataSource {
  private readonly TMmaxItems = 1000;
  private readonly pageSize = 20;
  private readonly pageLimit = Math.floor(
    (this.TMmaxItems - 1) / this.pageSize
  );

  constructor() {
    super();
    this.baseURL = "https://app.ticketmaster.eu/mfxapi/v2/";
  }

  public willSendRequest(request: RequestOptions): void {
    request.params.set("apikey", this.context.token);
  }

  public async getAttractionsPage(
    page: number,
    city: string
  ): Promise<any | undefined> {
    const data = await this.getPageable({
      endpoint: "attractions",
      page,
      city
    });

    return (
      data._embedded && {
        attractions: data._embedded.attractions,
        hasMore: Boolean(data._links.next)
      }
    );
  }

  public getAttraction(id: number): Promise<any | undefined> {
    return this.get(`attractions/${id}.json`);
  }

  public async getEventsPage(
    page: number,
    city: string,
    classification?: string
  ): Promise<any | undefined> {
    const config: any = { endpoint: "events", page, city };

    if (classification) {
      config.classificationId = classification;
    }

    const data = await this.getPageable(config);

    return (
      data._embedded && {
        events: data._embedded.events,
        hasMore: Boolean(data._links.next)
      }
    );
  }

  public getEvent(id: number): Promise<any | undefined> {
    return this.get(`events/${id}.json`);
  }

  public async getVenuesPage(
    page: number,
    city: string
  ): Promise<any | undefined> {
    const data = await this.getPageable({ endpoint: "venues", page, city });

    return (
      data._embedded && {
        venues: data._embedded.venues,
        hasMore: Boolean(data._links.next)
      }
    );
  }

  public getVenue(id: number): Promise<any | undefined> {
    return this.get(`venues/${id}.json`);
  }

  private getPageable(
    { endpoint, page, ...queries }: any // TODO type dat, meh
  ): Promise<any> {
    return this.get(`${endpoint}.json`, {
      page: Math.min(page, this.pageLimit),
      sort: "date,asc",
      ...queries
    });
  }
}
