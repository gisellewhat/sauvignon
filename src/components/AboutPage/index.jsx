import React, { Component } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Section from '../Section';

class AboutPage extends Component {
  render() {
    return (
      <Section>
        <HelmetProvider>
          <Helmet>
            <title>Giselle Que | About</title>
            <meta name="description" content="About page of Giselle Que." />
          </Helmet>
        </HelmetProvider>
        <h1>Hello About Page</h1>
      </Section>
    );
  }
}
export default AboutPage;
