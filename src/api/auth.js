import base from './base';

class Admin {
  login = (params) => base.get('/auth/login', params).then(({ data }) => data);

  register = (params) =>
    base.get('/auth/register', params).then(({ data }) => data);
}

export default new Admin();
