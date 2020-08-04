import React, { Component } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import logo from '../../assets/react-logo.svg';
import s from './homepage.scss';

class HomePage extends Component {
  render() {
    return (
      <div>
        <HelmetProvider>
          <Helmet>
            <title>Giselle Que | UX Designer</title>
            <meta
              name="description"
              content="Giselle Que is a User Experience Designer based in Manila, Philippines."
            />
          </Helmet>
        </HelmetProvider>
        <section className="hero">
          {/* <div className={s.hero__container}> */}
          <div className="container__wrapper">
            <h1 className="hero__header">I'm Giselle Que —</h1>
          </div>
          
        </section>
        <section className="container u-paddingT100 u-paddingB100">
          {/* <header className="App-header">
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
          </header> */}
          <div className="container__wrapper text-bg">
            <h1>This is Header 1.</h1>
            <h2>This is Header 2.</h2>
            <h3>This is Header 3.</h3>
            <h4>This is Header 4.</h4>
            <h5>This is Header 5.</h5>
            <h6>This is Header 6.</h6>
            <p>
              This is some body copy. Donec id elit non mi porta gravida at eget
              metus. <a>This is a hyperlink</a>. Donec ullamcorper nulla non
              metus auctor fringilla. <b>This is some bold text</b>. Vivamus
              sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
              Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
              auctor. <i>This is some italicised text</i>. Sed posuere
              consectetur est at lobortis.{' '}
              <strong>This is some strong text.</strong>
            </p>

            <ul>
              <li>This is an unsorted list item.</li>
              <li>This is an unsorted list item.</li>
              <li>This is an unsorted list item.</li>
            </ul>
            <ol>
              <li>This is an ordered list item.</li>
              <li>This is an ordered list item.</li>
              <li>This is an ordered list item.</li>
            </ol>
            <blockquote>
              This is a block quote. Donec id elit non mi porta gravida at eget
              metus. Donec ullamcorper nulla non metus auctor fringilla. Vivamus
              sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
              Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
              auctor. Sed posuere consectetur est at lobortis.
            </blockquote>
            <figure>
              <img />
              <figcaption>This is a figure caption.</figcaption>
            </figure>
          </div>
        </section>
      </div>
    );
  }
}
export default HomePage;
