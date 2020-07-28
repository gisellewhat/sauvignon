import React from 'react';
import './styles/styles.scss';
import './App.scss';
import navigation from './data';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import NotFoundPage from './components/NotFoundPage';

import { ReactComponent as Logo } from './assets/logo.svg';
import Header from './components/Header';

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header items={navigation} logo={<Logo />} navPosition="center" />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="*" component={NotFoundPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
