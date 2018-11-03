const { RESTDataSource } = require('apollo-datasource-rest');

class TicketmasterApi extends RESTDataSource {
    constructor() {
      super();
      this.baseURL = 'https://app.ticketmaster.com/discovery/v2/';
    }
    willSendRequest(request) {
      request.params.set('apikey', this.context.token);
    }
  
    async getMostRelevantEvents(city) {
      const data = await this.get('events.json', { city });
  
      return data._embedded && data._embedded.events;
    }
}

module.exports.TicketmasterApi = TicketmasterApi;
