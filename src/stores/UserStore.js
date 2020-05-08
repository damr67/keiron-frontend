import { observable, action, decorate } from 'mobx';
import user from '../api/user';
class UserStore {
  // Observable
  userTickets = [];

  // Observable
  users = [];

  //Observable
  loading = false;

  // Observable
  error = {};

  // Action
  getUsers = () => {
    this.loading = true;
    return user
      .getUsers()
      .then((res) => {
        this.loading = false;
        this.users = res.data;
      })
      .catch((err) => {
        this.loading = false;
        this.error = err;
      });
  };

  // Action
  getUserTickets = (id_user = '') => {
    this.loading = true;

    if (id_user) {
      return user
        .getTicketsPerUser(`?id_user=${id_user}`)
        .then((res) => {
          this.loading = false;
          this.userTickets = res.data;
        })
        .catch((err) => {
          this.loading = false;
          this.error = err;
        });
    } else {
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
    }
  };

  // Action
  addTicket = (id_user, description, ticket_pedido) => {
    this.loading = true;
    return user
      .addTicket(
        `?id_user=${id_user}&description=${description}&ticket_pedido=${ticket_pedido}`
      )
      .then((res) => {
        this.loading = false;
        this.getUserTickets();
      })
      .catch((err) => {
        this.loading = false;
        this.error = err;
      });
  };

  // Action
  setTicket = (id, id_user, ticket_pedido) => {
    this.loading = true;
    return user
      .setTicket(`?id=${id}&ticket_pedido=${ticket_pedido}`)
      .then((res) => {
        this.loading = false;
        this.getUserTickets(id_user);
      })
      .catch((err) => {
        this.loading = false;
        this.error = err;
      });
  };

  // Action
  updateTicket = (id, id_user, description, ticket_pedido) => {
    this.loading = true;
    return user
      .updateTicket(
        `?id=${id}&id_user=${id_user}&description=${description}&ticket_pedido=${ticket_pedido}`
      )
      .then((res) => {
        this.loading = false;
        this.getUserTickets();
      })
      .catch((err) => {
        this.loading = false;
        this.error = err;
      });
  };

  // Action
  deleteTicket = (id) => {
    this.loading = true;
    return user
      .deleteTicket(`?id=${id}`)
      .then((res) => {
        this.loading = false;
        this.getUserTickets();
      })
      .catch((err) => {
        this.loading = false;
        this.error = err;
      });
  };
}

decorate(UserStore, {
  userTickets: observable,
  users: observable,
  loading: observable,
  error: observable,
  getUserTickets: action,
  addTicket: action,
  updateTicket: action,
  deleteTicket: action,
  setTicket: action
});

export default new UserStore();
