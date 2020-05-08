import { observable, action, decorate } from 'mobx';
import user from '../api/user';

export type UserStoreType = {
  error: any,
  userTickets: Array<Object>,
  loading: boolean,
  getUserTickets: () => void
};

class UserStore {
  userTickets = [];

  loading = false;

  error = {};

  getUserTickets = () => {
    this.loading = true;
    return user
      .getUserTickets()
      .then((res) => {
        this.loading = false;
        this.userTickets = res.data;
      })
      .catch((err) => {
        this.loading = false;
        this.error = err;
      });
  };
}

decorate(UserStore, {
  userTickets: observable,
  loading: observable,
  error: observable,
  getUserTickets: action
});

export default new UserStore();
