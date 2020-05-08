import { observable, action, decorate } from 'mobx';
import admin from '../api/admin';

export type AdminStoreType = {
  error: any,
  adminTickets: Array<Object>,
  loading: boolean,
  getAllTickets: () => void
};

class AdminStore {
  adminTickets = [];

  loading = false;

  error = {};

  getAllTickets = () => {
    this.loading = true;
    return admin
      .getAllTickets()
      .then((res) => {
        this.loading = false;
        this.adminTickets = res.data;
      })
      .catch((err) => {
        this.loading = false;
        this.error = err;
      });
  };
}

decorate(AdminStore, {
  adminTickets: observable,
  loading: observable,
  error: observable,
  getAllTickets: action
});

export default new AdminStore();
