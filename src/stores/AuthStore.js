import { observable, action, decorate } from 'mobx';
import auth from '../api/auth';

export type UserStoreType = {
  isAuthenticated: boolean,
  login: () => void,
  logout: () => void
};

class AuthStore {
  isAuthenticated = false;

  error = false;

  user = [];

  login = (mail, pass) => {
    this.error = false;
    return auth
      .login(`?mail=${mail}&pass=${pass}`)
      .then((res) => {
        if (res.data.length === 0) {
          this.user = {};
          this.isAuthenticated = false;
        } else {
          this.user = res.data;
          this.isAuthenticated = true;
        }
      })
      .catch((err) => {
        this.error = true;
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
  logout: action,
  user: observable
});

export default new AuthStore();
