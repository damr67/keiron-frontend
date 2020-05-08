import base from './base';

class Admin {
  getAllTickets = (params) =>
    base.get('/tickets', params).then(({ data }) => data);
}

export default new Admin();
