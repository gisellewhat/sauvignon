import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import styled from 'styled-components';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import NotFoundPage from './components/NotFoundPage';
import Header from './components/Header';
import Footer from './components/Footer';

// import styles from './App.scss';

const AppWrapper = styled.div`
  // max-width: calc(768px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`;

export default function App() {
  return (
    <AppWrapper>
      <HelmetProvider>
        <Helmet>
          <title>Giselle Que - UX Designer</title>
          <meta name="description" content="Giselle Que is a User Experience Designer based in Manila, Philippines."/>
        </Helmet>
      </HelmetProvider>
    {/* <div className="App"> */}
      <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/about" component={AboutPage}/>
        <Route path="*" component={NotFoundPage}/>
      </Switch>
      </BrowserRouter>
      <Footer />
    {/* </div> */}
    </AppWrapper>
    
  );
}