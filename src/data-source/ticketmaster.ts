import { RESTDataSource } from 'apollo-datasource-rest';

const TMmaxItems = 1000;
const pageSize = 20;
const pageLimit = Math.floor((TMmaxItems - 1) / pageSize);

export default class TicketmasterApi extends RESTDataSource {
  constructor() {
      super();
      this.baseURL = 'https://app.ticketmaster.com/discovery/v2/';
  }

  willSendRequest(request) {
    request.params.set('apikey', this.context.token);
  }

  async getEventsPage(page, city) {
    page = Math.min(page, pageLimit);
    const data = await this.get('events.json', { page, city });

    return data._embedded && {
      events: data._embedded.events,
      hasMore: Boolean(data._links.next),
    };
  }
}
