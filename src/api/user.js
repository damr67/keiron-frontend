import base from './base';

class User {
  getUserTickets = (params) =>
    base.get('/tickets', params).then(({ data }) => data);
}

export default new User();
