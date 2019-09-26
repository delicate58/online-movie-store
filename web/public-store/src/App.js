import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {
  componentDidMount(){
    axios.get(`http://localhost:3002/api/category`,{ headers: { ['auth-token']:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZDgwZmU4N2YzNjEwZjE0ZWMxOWFiY2MiLCJpYXQiOjE1Njk1MjQxMDh9.LeSv8vydJluWOVp61SxVwm75fvimecSKfC7e_0EalbA' } })
      .then(res => {
        const persons = res.data;
        console.log(persons);
      })
  }
  render() {
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
}

export default App;

