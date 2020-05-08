import base from './base';

class Admin {
  login = (params) => base.get('/auth', params).then(({ data }) => data);
}

export default new Admin();
