import React, { useEffect } from 'react';
import { observer, inject } from 'mobx-react';

const AdminContainer = ({ admin }) => {
  useEffect(() => {
    // Fetching admin Tickets
    admin.getAllTickets();
  }, [admin]);

  const { adminTickets, loading } = admin;

  return (
    <div>
      <h1>Admin</h1>
      {loading && <p>Loading...</p>}
      <ul>
        {adminTickets.map((ticket) => (
          <li>{ticket.id_user}</li>
        ))}
      </ul>
    </div>
  );
};

export default inject('admin')(observer(AdminContainer));
