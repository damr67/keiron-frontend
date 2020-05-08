import React, { useState } from 'react';
import { observer, inject } from 'mobx-react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';

function AddTicket({ user, users, saveNew, saveEdit, isEdit, editId, usrId }) {
  const [description, setDescritption] = useState('');
  const [userId, setUserId] = useState(0);

  const handleChange = (event) => {
    setUserId(event.target.value);
  };

  return (
    <div styles={{ background: 'white' }}>
      <Typography variant="h4" style={style}>
        {isEdit ? 'Edit Selected Ticket' : 'Add New Ticket'}
      </Typography>
      <TextField
        type="text"
        placeholder="Description"
        fullWidth
        margin="normal"
        name="description"
        value={description}
        onChange={(e) => setDescritption(e.target.value)}
      />
      <Select
        native
        value={userId}
        onChange={handleChange}
        input={<Input id="demo-dialog-native" />}
      >
        {users &&
          users.map((user) => (
            <option value={user.id_user} key={user.id_user}>
              {user.nombre}
            </option>
          ))}
      </Select>

      <Button
        variant="contained"
        color="primary"
        onClick={() => saveNew(description, userId)}
        disabled={description.length < 1}
        style={{ marginLeft: '35px' }}
      >
        Add
      </Button>

      {isEdit && (
        <Button
          variant="contained"
          color="primary"
          onClick={() => saveEdit(description, editId, usrId)}
          disabled={description.length < 1}
          style={{ marginLeft: '35px' }}
        >
          Save Edit
          {console.log(description, editId, usrId)}
        </Button>
      )}
    </div>
  );
}

const style = {
  display: 'flex',
  justifyContent: 'center'
};

export default inject('user')(observer(AddTicket));
