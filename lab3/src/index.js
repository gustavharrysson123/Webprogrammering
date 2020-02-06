import 'bootstrap/dist/css/bootstrap.css';
//import "bootstrap/dist/js/bootstrap.js"; // skip this if you do not use bootstrap modals
//import $ from 'jquery';                  // skip this if you do not use bootstrap modals
//import Popper from 'popper.js';          // skip this if you do not use bootstrap modals
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
