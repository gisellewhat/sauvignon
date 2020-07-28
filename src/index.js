import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.scss';
import App from './App';
import Footer from './components/Footer'
// import * as serviceWorker from './serviceWorker';
import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(React.createElement(App), 
//   document.getElementById('root'));
// registerServiceWorker();

ReactDOM.render([<App key="1" />, <Footer key="2" />], document.getElementById("root"));

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
