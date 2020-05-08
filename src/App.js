import React, { useEffect } from 'react';
import logo from './logo.svg';
import user from './api/user';
import './App.css';

function App({ children }) {
  useEffect(() => {
    user
      .getUsers()
      .then((res) => {
        console.log('Successfull request', res);
      })
      .catch((err) => {
        console.log('Error while fetching from backend', err);
      });
  }, []);

  return <div className="App">{children}</div>;
}

export default App;
