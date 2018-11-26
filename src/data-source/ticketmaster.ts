import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';

export default class TicketmasterApi extends RESTDataSource {
  private readonly TMmaxItems = 1000;
  private readonly pageSize = 20;
  private readonly pageLimit = Math.floor((this.TMmaxItems - 1) / this.pageSize);

  constructor() {
      super();
      this.baseURL = 'https://app.ticketmaster.com/discovery/v2/';
  }

  public willSendRequest(request: RequestOptions): void {
    request.params.set('apikey', this.context.token);
  }

  // public async getEventsPage(page: number, city: string): Promise<EventsPage | undefined> {
  //   page = Math.min(page, this.pageLimit);
  //   const data = await this.get('events.json', { page, city });

  //   return data._embedded && {
  //     events: data._embedded.events,
  //     hasMore: Boolean(data._links.next),
  //   };
  // }

  public async getAttractionsPage(page: number, city: string): Promise<any | undefined> {
    const data = await this.getPageable('attractions', page, city);

    return data._embedded && {
      attractions: data._embedded.attractions,
      hasMore: Boolean(data._links.next),
    };
  }
  
  public getAttraction(id: number): Promise<any | undefined> {
    return this.get(`attractions/${id}.json`);
  }
  
  public async getEventsPage(page: number, city: string): Promise<any | undefined> {
    const data = await this.getPageable('events', page, city);

    return data._embedded && {
      events: data._embedded.events,
      hasMore: Boolean(data._links.next),
    };
  }
  
  public getEvent(id: number): Promise<any | undefined> {
    return this.get(`events/${id}.json`);
  }

  public async getVenuesPage(page: number, city: string): Promise<any | undefined> {
    const data = await this.getPageable('venues', page, city);

    return data._embedded && {
      venues: data._embedded.venues,
      hasMore: Boolean(data._links.next),
    };
  }
  
  public getVenue(id: number): Promise<any | undefined> {
    return this.get(`venues/${id}.json`);
  }

  private getPageable(resource: String, page: number, city: string): Promise<any> {
    return this.get(`${resource}.json`, {
        page: Math.min(page, this.pageLimit),
        city,
    });
  }
}
