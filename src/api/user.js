import base from './base';

class User {
  getUserTickets = (params) =>
    base.get('/tickets', params).then(({ data }) => data);

  getTicketsPerUser = (params) =>
    base.get('/tickets/user', params).then(({ data }) => data);

  addTicket = (params) =>
    base.get('/tickets/add', params).then(({ data }) => data);

  updateTicket = (params) =>
    base.get('/tickets/update', params).then(({ data }) => data);

  deleteTicket = (params) =>
    base.get('/tickets/delete', params).then(({ data }) => data);

  setTicket = (params) =>
    base.get('/tickets/set', params).then(({ data }) => data);

  getUsers = (params) => base.get('/users', params).then(({ data }) => data);
}

export default new User();
