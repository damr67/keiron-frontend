import { observable, action, decorate } from 'mobx';
import user from '../api/user';

export type UserStoreType = {
  error: any,
  users: Array<Object>,
  loading: boolean,
  getUsers: () => void
};

class UserStore {
  users = [];

  loading = false;

  error = {};

  getUsers = () => {
    this.loading = true;
    return user
      .getUsers()
      .then((res) => {
        this.loading = false;
        this.users = res;
      })
      .catch((err) => {
        this.loading = false;
        this.error = err;
      });
  };
}

decorate(UserStore, {
  user: observable,
  loading: observable,
  error: observable,
  getUsers: action
});

export default new UserStore();
