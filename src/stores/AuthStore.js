import { observable, action, decorate } from 'mobx';
import auth from '../api/auth';

export type UserStoreType = {
  isAuthenticated: boolean,
  login: () => void,
  logout: () => void
};

class AuthStore {
  isAuthenticated = false;

  tipo = 'user';

  error = false;

  user = {};

  login = (mail, pass) => {
    return auth
      .login(`?mail=${mail}&pass=${pass}`)
      .then((res) => {
        if (res.data.length === 0) {
          this.user = {};
          this.isAuthenticated = false;
        } else {
          this.user = res.data;
          this.isAuthenticated = true;
          this.tipo = res.data[0] === 1 ? 'admin' : 'user';
        }
      })
      .catch((err) => {
        console.log('Error on Authentication');
      });
  };

  register = (fullname, mail, pass) => {
    return auth
      .register(`?nombre=${fullname}&mail=${mail}&pass=${pass}`)
      .then((res) => {
        if (!!res) {
          this.error = true;
        } else {
          this.error = false;
        }
        console.log(this.error);
      })
      .catch((err) => {
        this.error = true;
      });
  };

  logout = () => (this.isAuthenticated = false);
}

decorate(AuthStore, {
  isAuthenticated: observable,
  error: observable,
  login: action,
  logout: action
});

export default new AuthStore();
