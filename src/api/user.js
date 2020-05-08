import base from './base';

class User {
  getUsers = (params) => base.get('/users', params).then(({ data }) => data);
}

export default new User();
