import React from 'react';
import logo from './logo.svg';
import './App.css';

import Login from './components/Login'
import Register from './components/Register'
import DadJokes from './components/DadJokes'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Dad Jokes</h1>
        <Login />
        <Register/>
        <DadJokes />
      </header>
    </div>
  );
}

export default App;
