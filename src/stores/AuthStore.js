import { observable, action, decorate } from 'mobx';
import auth from '../api/auth';

export type UserStoreType = {
  isAuthenticated: boolean,
  login: () => void,
  logout: () => void
};

class AuthStore {
  isAuthenticated = false;

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
        }
        // this.isAuthenticated = true;
      })
      .catch((err) => {
        console.log('Error on Authentication');
      });
  };

  logout = () => (this.isAuthenticated = false);
}

decorate(AuthStore, {
  isAuthenticated: observable,
  login: action,
  logout: action
});

export default new AuthStore();
