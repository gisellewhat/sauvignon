import React, { Component } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import logo from '../../assets/react-logo.svg';
import Section from '../Section';

class HomePage extends Component {
  render() {
    return (
      <Section>
        <HelmetProvider>
          <Helmet>
            <title>Giselle Que | UX Designer</title>
            <meta
              name="description"
              content="Giselle Que is a User Experience Designer based in Manila, Philippines."
            />
          </Helmet>
        </HelmetProvider>
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
      </Section>
    );
  }
}
export default HomePage;
