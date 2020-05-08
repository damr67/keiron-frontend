import UserStore from './UserStore';
import AdminStore from './AdminStore';
import AuthStore from './AuthStore';

const store = {
  user: UserStore,
  admin: AdminStore,
  auth: AuthStore
};

export default store;
