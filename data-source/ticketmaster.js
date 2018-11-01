const { RESTDataSource } = require('apollo-datasource-rest');

class TicketmasterApi extends RESTDataSource {
    constructor() {
      super();
      this.baseURL = 'https://app.ticketmaster.com/discovery/v2/';
    }
    willSendRequest(request) {
      request.params.set('apikey', this.context.token);
    }
  
    async getMostRelevantEvents(limit = 10) {
      const data = await this.get('events.json');
  
      return data._embedded.events;
    }
}

module.exports.TicketmasterApi = TicketmasterApi;
