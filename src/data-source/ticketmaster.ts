import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { EventsPage } from 'src/schema';

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

  public async getEventsPage(page: number, city: string): Promise<EventsPage | undefined> {
    page = Math.min(page, this.pageLimit);
    const data = await this.get('events.json', { page, city });

    return data._embedded && {
      events: data._embedded.events,
      hasMore: Boolean(data._links.next),
    };
  }
}
