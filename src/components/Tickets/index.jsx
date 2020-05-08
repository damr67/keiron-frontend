import React, { useState, useEffect } from 'react';
import { observer, inject } from 'mobx-react';
import AddTicket from '../AddTicket';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';
import Typography from '@material-ui/core/Typography';

const ListUserComponent = ({ user }) => {
  const [editId, setEditId] = useState(0);
  const [usrId, setUsrId] = useState(0);
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    const { getUserTickets, getUsers } = user;
    getUserTickets();
    getUsers();
  }, []);

  const deleteUser = (userId) => {
    const { deleteTicket } = user;
    deleteTicket(userId);
  };

  const handleEdit = (ticket) => {
    setIsEdit(true);
    setEditId(ticket.id_user);
    setUsrId(ticket.id);
  };

  const editUser = (description, editId, usrId) => {
    const { updateTicket } = user;
    updateTicket(usrId, editId, description, 0);
    setIsEdit(false);
  };

  const addUser = (description, userId) => {
    const { addTicket } = user;
    addTicket(userId, description, 0);
  };

  return (
    <div style={{ margin: '100px 0' }}>
      <AddTicket
        users={user.users}
        saveNew={addUser}
        saveEdit={editUser}
        editId={editId}
        usrId={usrId}
        isEdit={isEdit}
      />

      <Typography variant="h4" style={style}>
        User Details
      </Typography>

      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Description</TableCell>
            <TableCell>Usuario</TableCell>
            <TableCell align="right">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {!user.loading &&
            user.userTickets.map((ticket) => (
              <TableRow key={ticket.id}>
                <TableCell align="right">{ticket.description}</TableCell>
                <TableCell align="right">{ticket.id_user}</TableCell>
                <TableCell align="right">
                  {ticket.ticket_pedido === 1 ? 'Pedido' : 'Pendiente'}
                </TableCell>
                <TableCell align="right">
                  <Button onClick={() => handleEdit(ticket)}>
                    <CreateIcon />
                  </Button>
                </TableCell>
                <TableCell align="right">
                  <Button onClick={() => deleteUser(ticket.id)}>
                    <DeleteIcon />
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
