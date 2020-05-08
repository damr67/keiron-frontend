import React, { useEffect } from 'react';
import { observer, inject } from 'mobx-react';

const UserContainer = ({ user }) => {
  useEffect(() => {
    // Fetching User Tickets
    user.getUserTickets();
  }, [user]);

  const { userTickets, loading } = user;

  return (
    <div>
      <h1>User</h1>
      {loading && <p>Loading...</p>}
      <ul>
        {userTickets.map((ticket) => (
          <li>{ticket.id_user}</li>
        ))}
      </ul>
    </div>
  );
};

export default inject('user')(observer(UserContainer));
