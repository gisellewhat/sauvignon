import React, { Component } from 'react';
import logo from '../logo.svg';

class HomePage extends Component{
    render(){
        return(
            <div>
                <h1>Hello Home Page</h1>
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
export default HomePage;