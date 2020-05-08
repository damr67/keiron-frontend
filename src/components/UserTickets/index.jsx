import React, { useState, useEffect } from 'react';
import { observer, inject } from 'mobx-react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import DoneIcon from '@material-ui/icons/Done';
import ClearIcon from '@material-ui/icons/Clear';
import Typography from '@material-ui/core/Typography';

const ListUserComponent = ({ user, auth, userId }) => {
  useEffect(() => {
    const { getUserTickets, getUsers } = user;
    getUserTickets(userId);
    getUsers();
  }, []);

  const setTicket = (ticketId, id_user, ticket_pedido) => {
    const { setTicket } = user;
    setTicket(ticketId, id_user, ticket_pedido === 1 ? 0 : 1);
  };

  return (
    <div style={{ margin: '100px 0' }}>
      <Typography variant="h4" style={style}>
        Your Tickets
      </Typography>

      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Description</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell align="right">Setear</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {!user.loading &&
            user.userTickets.map((ticket) => (
              <TableRow key={ticket.id}>
                <TableCell align="right">{ticket.description}</TableCell>
                <TableCell align="right">
                  {ticket.ticket_pedido === 1 ? 'Pedido' : 'Pendiente'}
                </TableCell>
                <TableCell align="right">
                  <Button
                    onClick={() =>
                      setTicket(ticket.id, ticket.id_user, ticket.ticket_pedido)
                    }
                  >
                    {ticket.ticket_pedido === 1 ? <ClearIcon /> : <DoneIcon />}
                  </Button>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </div>
  );
};

const style = {
  display: 'flex',
  justifyContent: 'center'
};

export default inject('admin', 'user')(observer(ListUserComponent));
