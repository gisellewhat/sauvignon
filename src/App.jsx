import React from 'react';
import './styles/styles.scss';
import './App.scss';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import navigation from './data';
// import styled from 'styled-components';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import NotFoundPage from './components/NotFoundPage';

import { ReactComponent as Logo } from './assets/logo.svg';
import Header from './components/Header';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="App">
      <HelmetProvider>
        <Helmet>
          <title>Giselle Que - UX Designer</title>
          <meta
            name="description"
            content="Giselle Que is a User Experience Designer based in Manila, Philippines."
          />
        </Helmet>
      </HelmetProvider>
      <BrowserRouter>
        <Header items={navigation} logo={<Logo />} navPosition="center" />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="*" component={NotFoundPage} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </div>
  );
}
