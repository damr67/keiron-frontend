import React, { useEffect } from 'react';
import logo from './logo.svg';
import user from './api/user';
import './App.css';

function App() {
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

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
